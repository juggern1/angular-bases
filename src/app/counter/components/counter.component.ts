import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
            <h3>
              Contador: {{counter}}
            </h3>
            <button (click)="increaseBy(1)">+1</button>
            <button (click)="reset()">Reset</button>
            <button (click)="increaseBy(-1)">-1</button>

  `
})
export class CounterComponent{

  counter: number = 10;

  increaseBy(valor: number): void{
    this.counter += valor;
  }

  reset(){
    this.counter = 10;
  }
}
