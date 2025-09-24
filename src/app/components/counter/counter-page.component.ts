import { Component } from "@angular/core";

@Component({
    template:`
    <h1>{{counter}}</h1>
    <h2>Counter Component</h2>

    <button (click)="sumar()" [disabled]="counter == 0">+</button>
    <button (click)="restar()" [disabled]="counter == 0">-</button>
    `
})

export class CounterPageComponent{
counter = 10;

sumar(){
    this.counter = this.counter + 1;
}
restar(){
    this.counter = this.counter - 1;
}


}