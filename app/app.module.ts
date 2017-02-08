import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import './lib/rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './inmemory/in-memory-data.service';

import {AppComponent} from './app.component';
import { EmployeeService } from './service/employee.service';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeHome } from './employee/employee-home.component';
import { StateService } from './service/state.service'; 
 
import { AppRoutingModule }     from './app-routing.module';
import { HTTPTestComponent } from './httpdemo/http-test.component';
import { PagingTable } from './pagination/paging-table.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService,{passThruUnknownUrl: true}),
        AppRoutingModule
    ],
    declarations:[
        AppComponent,
        EmployeeListComponent,
        EmployeeComponent,
        EmployeeHome,
        HTTPTestComponent,
        PagingTable
    ],
    providers:[EmployeeService,StateService],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule{

}