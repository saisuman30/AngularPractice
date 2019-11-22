import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';

import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee/employeelist.component';
import {EmployeeCountComponent} from './employee/employeeCount.component';

import {SimpleComponent} from './others/simple.component';
import {EmployeeTitlePipe} from './employee/employeetitle.pipe';


import {HomeComponent} from './home/home.component';

import {PageNotFoundComponent} from './others/pagenotfound.component';

const appRoutes: Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeListComponent,
    EmployeeTitlePipe,EmployeeCountComponent,SimpleComponent,HomeComponent,PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
