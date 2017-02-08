import 'rxjs/add/operator/switchMap';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Employee } from '../domain/employee';
import { EmployeeService } from '../service/employee.service';
import { StateService } from '../service/state.service'; 
import { State } from '../domain/state';

@Component({
    moduleId:module.id,
    selector:'emp-curd',
     
    templateUrl:'employee.component.html',
    styleUrls:['employee.component.css']
})
export class EmployeeComponent implements OnInit{
  editmode = false;
  stateSelected = true;
  empId: string;
  errormessage:string;
  countries = ['India', 'America',
            'UAE', 'UK'];
  employee = {};
  submitted = false;
  password:string='';

  states: Observable<State[]>;
  private searchTerms = new Subject<string>();

  constructor(private employeeService:EmployeeService,
              private route: ActivatedRoute,
              private location: Location,
              private stateService:StateService){    
  }
  ngOnInit(){
       this.route.params.subscribe(params => {
       console.log('id received=='+params['id']);
       this.empId = params['id']; 
       });
     if(!isNaN(+ this.empId)){
        console.log('Inside numer , Id ='+this.empId);
        this.employeeService.getEmployee(+this.empId)
                    .then(employee =>{
                                        this.employee=employee,
                                        this.password=employee.password
                                    });
         this.editmode = true;
    }else{
        console.log('Inside  string , Id ='+this.empId);
        this.employee = {};
        this.editmode = false;
    }

    this.setSerach();
  }
 
  setSerach():void{
      this.states = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.stateService.search(term)
        // or the observable of empty states if no search term
        : Observable.of<State[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<State[]>([]);
      });
  }
  // Push a search term into the observable stream.
  search(term: string): void {
     this.stateSelected=false;
    this.searchTerms.next(term);
  }

  selectState(state: State): void {
     this.employee.state=state;
     this.stateSelected=true;
  }

  onSubmit() { this.submitted = true; }
  
  newEmployee(employee:Employee):void{
    if (!employee || !employee.name || !employee.email || !employee.mobile || !employee.state) { 
       this.errormessage="Please fill all mandatory fields";
      return; 
    }
    if(this.validateEmp(employee)){
       this.employeeService.create(employee)
      .then(employee => {
       this.employee = {};
       this.password='';
      });
    }
  }

  clearFields():void{
      this.employee = {};
      this.password=null;
      this.errormessage=null;
  }

 goBack():void{
            this.editmode=false;
            this.employee = {};
             this.location.back();
 }

editEmployee(employee):void{
  if (!employee || !employee.name || !employee.email || !employee.mobile || !employee.state) { 
       this.errormessage="Please fill all mandatory fields";
      return; 
    }
  if(this.validateEmp(employee)){
     this.employeeService.update(employee)
      .then(() => this.goBack());
  }
 }

 validateEmp(employee:Employee):Boolean{
   if(employee.password!=this.password){
     this.errormessage="Both  password should be same";
     return false;
   }
   return true;
 }
}