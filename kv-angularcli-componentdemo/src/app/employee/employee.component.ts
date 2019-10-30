import {Component} from '@angular/core';

@Component({
    selector:'my-employee',
    templateUrl:'./employee.component.html'
})

export class EmployeeComponent{
    firstName:string='Sai suman';
    lastName:string='Yember';
    gender:string='Male';
    age:number=29;
    imagePath:string='https://media.licdn.com/dms/image/C5103AQGzbxX1_aPJBA/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=fDr3Lm-jW8QYrAzSi_1-kqkh5G9gbdy5bhWcQ1UgSFc';
    isDisabled:boolean=false;
    getFullName():string{
        return this.firstName+this.lastName;
    }   


}