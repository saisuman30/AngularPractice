import {Component} from '@angular/core';

@Component({
    selector:'my-employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
})

export class EmployeeComponent{
    firstName:string='Sai suman';
    lastName:string='Yember';
    gender:string='Male';
    age:number=29;
    imagePath:string='https://media.licdn.com/dms/image/C5103AQGzbxX1_aPJBA/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=fDr3Lm-jW8QYrAzSi_1-kqkh5G9gbdy5bhWcQ1UgSFc';
    isDisabled:boolean=false;
    EmployeepageDetails:string='These are employee details';
    colspan:number=2;
    classesToApply:string="ItalicClass BoldClass";
    applyBoldClass:boolean=true;
    applyItalicClass: boolean=false;
    isBold:boolean=true;
    getFullName():string{
        return this.firstName+this.lastName;
    }   

    AddClasses(){
        let classes ={
              boldClass:this.applyBoldClass,
              ItalicClass:this.applyItalicClass
        };
        return classes;
    }


}