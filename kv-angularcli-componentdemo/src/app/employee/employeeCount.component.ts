import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'my-employeecount',
    templateUrl: './employeeCount.component.html',
    styleUrls: ['./employeeCount.component.css']
})

export class EmployeeCountComponent{
    @Input()
    all:number;
    @Input()
    male:number;
    @Input()
    female:number;

    selectedRadioButtonValue:string='All';

    @Output()
    countRadioButtonSelectedChanged:EventEmitter<string>= new EventEmitter<string>();  

    onSelectedRadioButtonChange(){
        this.countRadioButtonSelectedChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }



}