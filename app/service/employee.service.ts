import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Employee} from '../domain/employee';
@Injectable()
export class EmployeeService{

      private employeeUrl='app/employees';

      private createEmpUrl='http://localhost:8080/employee/create';
      
      private heroesUrl = 'http://localhost:8080/employee/findAll';

      constructor(private http:Http){}

      private headers = new Headers({'Content-Type': 'application/json'});

      getEmployees():Promise<Employee[]>{
          return this.http.get(this.employeeUrl)
           .toPromise()
           .then(response => response.json().data as Employee[])
           .catch(this.handleError);
      }

    create(employee: Employee): Promise<Employee> {
        return this.http
        .post(this.createEmpUrl, employee, {headers: this.headers})
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
    }

    update(employee: Employee): Promise<Employee> {
        const url = `${this.employeeUrl}/${employee.id}`;
        return this.http
        .put(url, JSON.stringify(employee), {headers: this.headers})
        .toPromise()
        .then(() => employee)
        .catch(this.handleError);
    }

     delete(id: number): Promise<void> {
         console.log('id received'+id);
        const url = `${this.employeeUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    getEmployee(id: number): Promise<Employee> {
        return this.getEmployees()
                .then(employees => employees.find(employee => employee.id === id));
    }
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    findAllEmployees():Promise<Employee[]>{
       
          return this.http.get(this.heroesUrl)
           .toPromise()
           .then(response =>{ 
               console.log(response);
               response.json().data as Employee[]})
           .catch(this.handleError);
      }
}