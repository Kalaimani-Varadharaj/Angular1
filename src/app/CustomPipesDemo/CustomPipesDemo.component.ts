import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CustomPipesDemo',
  templateUrl: './CustomPipesDemo.component.html',
  styleUrls: ['./CustomPipesDemo.component.css']
})
export class CustomPipesDemoComponent implements OnInit {

  //Custom pipes property
  items: any[] = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Refrigerator', category: 'Appliances' },
    { name: 'Headphones', category: 'Electronics' },
    { name: 'Washing Machine', category: 'Appliances' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
