import { Component } from '@angular/core';

@Component({
    selector: 'my-employeelist',
    templateUrl: './employeelist.component.html',
    styleUrls: ['./employeelist.component.css']
})

export class EmployeeListComponent {
    employees: any[];
    constructor() {
        this.employees =
            [
                { Id: 101, firstName: 'Aone', lastName: 'xyzone', Gender: 'Male', Age: 29, Salary: 62000.5233 },
                { Id: 102, firstName: 'Atwo', lastName: 'xyztwo', Gender: 'Male', Age: 37, Salary: 159393.33 },
                { Id: 103, firstName: 'Athree ', lastName: 'xyzthree', Gender: 'Male', Age: 38, Salary: 172330.3993 },
                { Id: 104, firstName: 'Afour ', lastName: 'xyzfour', Gender: 'Female', Age: 31, Salary: 92330.3993 },


            ];
    }
    RefreshEmployees(): void {
        this.employees = [
            { Id: 101, firstName: 'Sai Suman', lastName: 'Yember', Gender: 'Male', Age: 29, Salary: 62000.5233 },
            { Id: 102, firstName: 'Sunil', lastName: 'Mahender', Gender: 'Male', Age: 37, Salary: 159393.33 },
            { Id: 103, firstName: 'Viay Krishna', lastName: 'Muvvala', Gender: 'Male', Age: 38, Salary: 172330.3993 },
            { Id: 104, firstName: 'Kasi Vinod', lastName: 'Borra', Gender: 'Male', Age: 31, Salary: 92330.3993 },
            { Id: 105, firstName: 'Satish', lastName: 'Galla', Gender: 'Male', Age: 34, Salary: 112330.3993 }
        ];

       

    }

     trackEmployeeById(index:number,employee:any):number
{
    return employee.Id
}
}
    
