import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice-component',
  templateUrl: './calculatrice-component.component.html',
  styleUrls: ['./calculatrice-component.component.css']
})
export class CalculatriceComponentComponent implements OnInit {
  value1: number = Math.floor(Math.random() * 10)+1;
  value2: number = Math.floor(Math.random() * 10)+1;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  getRandom1(): void {
    this.value1= Math.floor(Math.random() * 10)+1;
  }
  getRandom2(): void {
    this.value2= Math.floor(Math.random() * 10)+1;
  }
  plus(): void {
    this.result = this.value1+this.value2
  }
  minus(): void {
    this.result = this.value1-this.value2
  }
  divide(): void {
    this.result = this.value1/this.value2
  }
  multiply(): void {
    this.result = this.value1*this.value2
  }

}
