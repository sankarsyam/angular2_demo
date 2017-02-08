import { Component,OnInit } from '@angular/core';

import { StateService } from '../service/state.service';
import { State } from '../domain/state';
import { EmployeeService} from '../service/employee.service';
import { Employee } from '../domain/employee';
import { Headers,Http } from '@angular/http';
import { PagableResult } from '../domain/pagableresult';
@Component({
    moduleId:module.id,
    selector:'page-view',
    templateUrl:'paging-table.component.html',
    styleUrls:['paging-table.component.css']
})
export class PagingTable implements OnInit{
    private heroesUrl = 'http://localhost:8080/employee/findAll';

    itemsPerpage = 10;
    totalPages=0;
    totalRecords=0;
    states:State[];
    errorMsg:string;
    sortDir:string="asc";
    sortBy:string="na";
    pages=[];
    tableHeadders=[];
    employees:Employee[];
    pageResult:PagableResult;
    currentPage=0;
    startPageIndex=1;
    pageStart=0;
    pageEnd=0;
    currentIndex=1;
    titiles=[{name:'Id'},{name:'Name'},{name:'Email'},{name:'Mobile'}];
   private headers = new Headers({'Content-Type': 'application/json'}); 
    getEmployees():void{
        // this.employeeService.findAllEmployees().then(employees => this.employees=employees);
        this.getHeroes();
    }
    constructor(private stateService:StateService,private employeeService:EmployeeService,private http:Http){

    }
    
 getHeroes(): void {
   this.http.get(this.heroesUrl)
               .toPromise()
               .then(response =>{
                   console.log("Hereeee...."+response);
                   this.employees=response.json();
                   this.setPage();
                })
               .catch(this.handleError);
  }
    ngOnInit(){
        this.stateService.getAll().subscribe(
            states=>{
                this.states=states;
               this.setPage();
            },
            error =>this.errorMsg=<any>error
        );

        // this.getHeroes();
        this.getEmpForPage();
    }

   setPage=function(){
       let pages=[];
       if(this.startPageIndex ==1 || this.totalPages-this.startPageIndex >=4){
           if(this.startPageIndex+5 <= this.totalPages+1){
               for (let i = this.startPageIndex; i < this.startPageIndex+5; i++) {
                 if(i < this.totalPages+1){
                      pages.push(i);
                 }
            }
        }else{
             for (let i = this.startPageIndex; i < this.totalPages+1; i++) {
                 if(i < this.totalPages+1){
                      pages.push(i);
                 }
            }
        }
            
       this.pages=pages;
       }
      
   }

   valueChanged = function(){
	    this.firstPage();
   };
   private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    getEmpForPage(): void {
    let pageUrl = 'http://localhost:8080/employee/findForPage/'+this.currentPage+'/'+this.itemsPerpage+'/'+this.sortDir+'/'+this.sortBy;
        this.http.get(pageUrl,{headers: this.headers})
               .toPromise()
               .then(response =>{
                console.log("Hereeee...."+response);
                this.pageResult=response.json() as PagableResult;
                console.log(this.pageResult.reultList);
                this.employees=this.pageResult.reultList;
                console.log(this.pageResult.totalPages);
                this.totalPages=this.pageResult.totalPages;  
                this.totalRecords=this.pageResult.totalRecords;
                this.setPage();
                this.setPageDetails();
         }).catch(this.handleError);
  }

  nextPage():void{
      if(this.currentPage<this.totalPages-1){
          this.startPageIndex=this.startPageIndex+1;
           this.currentIndex= this.currentPage+2;
          this.currentPage=this.currentPage+1;
          this.getEmpForPage();
         
      }
  }

  previousPage():void{
       if(this.currentPage>0){
           if(this.startPageIndex >1){
               this.startPageIndex=this.startPageIndex-1;
           }
           this.currentIndex= this.currentPage;
          this.currentPage=this.currentPage-1;
          this.getEmpForPage();
         
      }
  }
 movecurrentPage(page):void{
          this.currentPage=page-1;
          this.getEmpForPage();
          this.currentIndex= this.currentPage+1;
  }
 firstPage():void{
      this.currentPage=0;
      this.startPageIndex=1;
      this.getEmpForPage();
      this.currentIndex= 1;
 }
 lastPage():void{
      this.currentPage=this.totalPages-1;
      if(this.totalPages-4 > 0){
          this.startPageIndex=this.totalPages-4;
      }
      this.getEmpForPage();
      this.currentIndex= this.totalPages;
 }
 
 setPageDetails():void{
    this.pageStart=this.currentPage*this.itemsPerpage+1;
    this.pageEnd=this.currentPage*this.itemsPerpage+ +this.itemsPerpage;
    if(this.pageEnd >this.totalRecords){
        this.pageEnd =this.totalRecords;
    }
 }

 sortColumn(sortBy):void{
     this.sortDir = this.sortDir=='asc'?'desc':'asc';
     this.sortBy=sortBy.toLowerCase();
     this.firstPage();
 }
}