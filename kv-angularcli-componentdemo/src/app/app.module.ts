import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee/employeelist.component';

import {EmployeeTitlePipe} from './employee/employeetitle.pipe';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeListComponent,EmployeeTitlePipe
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
