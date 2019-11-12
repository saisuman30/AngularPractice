import {Component,Input,OnChanges,SimpleChanges} from '@angular/core';

@Component({
selector:'simple',
template:`you entered {{simpleInput}}`
})

export class SimpleComponent{
   
    @Input()    simpleInput:string;
    ngOnChanges(changes: SimpleChanges): void {
        for(let property in changes){
            let change = changes[property];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(property+": Current Value= "+current+',Previous Value= '+previous);
        }
        // throw new Error("Method not implemented.");
    }
}