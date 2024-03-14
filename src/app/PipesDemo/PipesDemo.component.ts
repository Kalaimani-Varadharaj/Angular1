import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PipesDemo',
  templateUrl: './PipesDemo.component.html',
  styleUrls: ['./PipesDemo.component.css']
})
export class PipesDemoComponent implements OnInit {
  name:string = 'James';
  id:number = 123;

  today:Date = new Date()
  price:number = 123.45
  pi:number = 3.14159265359
  percentage:number = 0.75


  constructor() { }

  ngOnInit() {
  }

}
