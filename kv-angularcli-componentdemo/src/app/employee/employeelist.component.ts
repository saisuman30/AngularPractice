import { Component} from '@angular/core';
import {Employee} from './employee';
import { EmployeeDetailsService } from './EmployeeDetails.service';

@Component({
    selector: 'my-employeelist',
    templateUrl: './employeelist.component.html',
    styleUrls: ['./employeelist.component.css'],
    providers:[EmployeeDetailsService]
})

export class EmployeeListComponent  {
    employees: Employee[];

    selectedEmployeeCountRadioButton:string='All';

    constructor(private employeeDetailsService: EmployeeDetailsService) { }
 
    ngOnInit(): void {
       this.getemployees();
     }
     getemployees(): void {
       this.employeeDetailsService.getEmployees().then(employees => this.employees = employees);
     }
    
    



    onEmployeeCountRadioButtonChanged(selectedRadioButtonValue:string):void{
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    GetTotalEmployeeCount():number{
        return (this.employees!=undefined)?this.employees.length:null;
    }

    GetTotalMaleEmployeeCount():number{
        return (this.employees!=undefined)?this.employees.filter(x=>x.Gender==='Male').length:null;
    }

    GetTotalFemaleEmployeeCount():number{
        return (this.employees!=undefined)?this.employees.filter(x=>x.Gender==='Female').length:null;        
    }
    // RefreshEmployees(): void {
    //     this.employees = [
    //         { Id: 101, firstName: 'Aone', lastName: 'xyzone', Gender: 'Male', Age: 29, Salary: 62000.5233 },
    //         { Id: 102, firstName: 'Atwo', lastName: 'xyztwo', Gender: 'Male', Age: 37, Salary: 159393.33 },
    //         { Id: 103, firstName: 'Athree ', lastName: 'xyzthree', Gender: 'Male', Age: 38, Salary: 172330.3993 },
    //         { Id: 104, firstName: 'Afour ', lastName: 'xyzfour', Gender: 'Female', Age: 31, Salary: 92330.3993 },
    //         { Id: 105, firstName: 'Afive', lastName: 'xyzfive', Gender: 'Female', Age: 34, Salary: 112330.3993 }
    //     ];

       

    // }

//      trackEmployeeById(index:number,employee:any):number
// {
//     return employee.Id
// }
}
    
