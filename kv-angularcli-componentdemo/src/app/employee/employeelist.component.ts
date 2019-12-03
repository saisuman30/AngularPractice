import { Component} from '@angular/core';
import {Employee} from './employee';
import { EmployeeDetailsService } from './EmployeeDetails.service';

@Component({
    selector: 'my-employeelist',
    templateUrl: './employeelist.component.html',
    styleUrls: ['./employeelist.component.css']
    
})

export class EmployeeListComponent  {
    employees: Employee[];
    statusMesage: string;
    selectedEmployeeCountRadioButton:string='All';

    constructor(private employeeDetailsService: EmployeeDetailsService) { }
 
    ngOnInit(): void {
       this.getemployees();
     }
     getemployees(): void {
       this.employeeDetailsService.getEmployees()
       .subscribe((employeeData)=>  this.employees = employeeData
       ,(error)=>{this.statusMesage="Problem with the service. Please try again.";
    console.error(error)});
     }
    
    



    onEmployeeCountRadioButtonChanged(selectedRadioButtonValue:string):void{
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    GetTotalEmployeeCount():number{
        return this.employees.length ;
    }

    GetTotalMaleEmployeeCount():number{
        return  this.employees.filter(x=>x.gender=='Male').length ;
    }

    GetTotalFemaleEmployeeCount():number{
        return this.employees.filter(x=>x.gender=='Female').length ;        
    }
  


}
    
