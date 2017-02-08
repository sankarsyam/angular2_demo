import {NgModule} from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeHome } from './employee/employee-home.component';
import { HTTPTestComponent } from './httpdemo/http-test.component';
import { PagingTable } from './pagination/paging-table.component';
import { CanDeactivateGuard } from './core/can-deactivate-guard.service';

const routes:Routes =[
     { path: '', redirectTo: '/employeeHome', pathMatch: 'full' },
     { path: 'employeeHome',  component: EmployeeHome },
     { path: 'employeeList',  component: EmployeeListComponent },
     { path: 'employee/:id', component: EmployeeComponent},
     { path: 'getResponse',  component: HTTPTestComponent },
     { path: 'pagination',  component: PagingTable }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}