import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Http,Response, } from '@angular/http';
import { Observable,throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { EmployeeCountComponent } from './employeeCount.component';


@Injectable()
export class EmployeeDetailsService {
  
  /**
   *
   */
  constructor(private _http:Http) {
   
    
  }

  getEmployees(): Observable<Employee[]> {
    return this._http.get('https://localhost:44346/api/Employee/GetEmployees').pipe(
      map((res:Response) =><Employee[]> res.json(),retry(1)),catchError(this.handleError)
      );

    
  }

  getEmployeeById(Id:number): Observable<Employee> {
    return this._http.get('https://localhost:44346/api/Employee/GetEmployeeDetails/'+Id).pipe(
      map((res:Response) =><Employee> res.json(),retry(1)),catchError(this.handleError)
      );

    
  }
  handleError(error:Response) {
   console.error(error);
   return throwError(error);
  }
}