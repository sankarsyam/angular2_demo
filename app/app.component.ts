import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'emp-app',
    template:`
    <ul class="menubar">
    <li> <a routerLink="/employeeHome" routerLinkActive="active">Home</a></li>
    <li> <a routerLink="/employeeList" routerLinkActive="active">Employees</a></li>
    <li><a routerLink="/employee/h" routerLinkActive="active">New employee</a></li>
    <li><a routerLink="/pagination" routerLinkActive="active">Pagination Sample</a></li>
    </ul>
     <router-outlet></router-outlet>
    `,
     styleUrls:['app.component.css']
})
export class AppComponent{

}