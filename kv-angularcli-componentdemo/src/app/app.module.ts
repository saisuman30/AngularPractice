import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee/employeelist.component';
import {EmployeeCountComponent} from './employee/employeeCount.component';

import {SimpleComponent} from './others/simple.component';
import {EmployeeTitlePipe} from './employee/employeetitle.pipe';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeListComponent,EmployeeTitlePipe,EmployeeCountComponent,SimpleComponent
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
