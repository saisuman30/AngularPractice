import { Injectable } from '@angular/core';
import { Employee } from './employee'
import { Employees } from './mock-employee';

@Injectable()
export class EmployeeDetailsService {
  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(Employees);
  }
}