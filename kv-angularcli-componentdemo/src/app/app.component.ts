import {Component} from '@angular/core';



@Component({
  selector:'my-app',
  // template:`Your Text : <input type="text" [(ngModel)]="userSimpleText"/>
  // <br/>
  // <br/>
  // <simple [simpleInput]='userSimpleText'></simple>`
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
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