import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService} from '../service/employee.service';
import { Employee } from '../domain/employee';

@Component({
    moduleId:module.id,
    selector:'employee-list',
    templateUrl:'employee-list.component.html',
    styleUrls:['employee-list.component.css','employee.component.css']
    
})
export class EmployeeListComponent implements OnInit{

    employees:Employee[];
    employee = {};
    editmode = false;
    password='';
    countries = ['India', 'America',
            'UAE', 'UK'];
    constructor(private employeeService:EmployeeService,private router:Router){
        
    }
    ngOnInit(){
        this.getEmployees();
    }

    getEmployees():void{
        this.employeeService.getEmployees().then(employees => this.employees=employees);
    }

    onSelect(employee:Employee):void{
        // this.employee=employee;
        // this.editmode=true;
        // this.password=employee.password;
        this.router.navigate(['/employee', employee.id]);
    }


    deleteEmployee(employee):void{
          this.employeeService.delete(employee.id).then(() => {
        this.employees = this.employees.filter(h => h !== employee);
         
      });
    }
}