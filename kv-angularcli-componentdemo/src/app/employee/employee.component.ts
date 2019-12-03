import {Component} from '@angular/core';
import { Employee } from './employee';
import {ActivatedRoute} from  '@angular/router';
import {EmployeeDetailsService} from './EmployeeDetails.service'

@Component({
    selector:'my-employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
 
})

export class EmployeeComponent{
    employee: Employee;
    statusMessage:string="Loading data,Please wait..";
    constructor(private _employeeDetailService: EmployeeDetailsService,private _activateRoute:ActivatedRoute) {
    }

    ngOnInit():void{
       this.getEmployeeById();
       
    }

    getEmployeeById(): void {        
        this._employeeDetailService.getEmployeeById(this._activateRoute.snapshot.params["id"])
        .subscribe((employeeData)=>  {
            if(employeeData==null)
            this.statusMessage="Employee Id specified doesn't exist";
            else
            this.employee = employeeData},
        (error)=>{this.statusMessage="Problem with the service. Please try again.";
     console.error(error)});
      }
//     firstName:string='Sai suman';
//     lastName:string='Yember';
//     gender:string='Male';
//     age:number=29;
//     imagePath:string='https://media.licdn.com/dms/image/C5103AQGzbxX1_aPJBA/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=fDr3Lm-jW8QYrAzSi_1-kqkh5G9gbdy5bhWcQ1UgSFc';
//     isDisabled:boolean=false;
//     EmployeepageDetails:string='These are employee details';
//     colspan:number=2;
//     classesToApply:string="ItalicClass BoldClass";
//     applyBoldClass:boolean=true;
//     applyItalicClass: boolean=false;
//     isBold:boolean=true;
//     ShowDetails:boolean=false;
//     getFullName():string{
//         return this.firstName+this.lastName;
//     }   

//     AddClasses(){
//         let classes ={
//               boldClass:this.applyBoldClass,
//               ItalicClass:this.applyItalicClass
//         };
//         return classes;
//     }

//     onClickMe():void{
//         console.log('Button Clicked');
//     this.isDisabled=!this.isDisabled;
//     }

//     ToggleShowDetails():void{
// this.ShowDetails=!this.ShowDetails;
//     }
}