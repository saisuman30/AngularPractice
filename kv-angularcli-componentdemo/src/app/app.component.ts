import {Component} from '@angular/core';



@Component({
  selector:'my-app',
  template: `<div style="padding:5px">
              <ul class="nav nav-tabs">
              <li><a routerLink="home">Home</a></li>
              <li><a routerLink="employees">Employees</a></li>
              
              </ul>
              <router-outlet></router-outlet>
              </div>`
  // template:`Your Text : <input type="text" [(ngModel)]="userSimpleText"/>
  // <br/>
  // <br/>
  // <simple [simpleInput]='userSimpleText'></simple>`
  //templateUrl:'./app.component.html',
  //styleUrls:['./app.component.css']
})

export class AppComponent{
  pageHeader:string='Employee Details';
  userSimpleText="Sai Suman"
//   title = 'Present are Students';
//   students: Student[];
//   selectedStudent: Student;
 
//   constructor(private studentService: StudentDetailsService) { }
 
//  ngOnInit(): void {
//     this.getStudents();
//   }
//   getStudents(): void {
//     this.studentService.getStudents().then(students => this.students = students);
//   }
 
  
 
//   onSelect(student: Student): void {
//     this.selectedStudent = student;
//     console.log(this.selectedStudent.name);
//   }
}