import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TwoWayBindingDemo',
  templateUrl: './TwoWayBindingDemo.component.html',
  styleUrls: ['./TwoWayBindingDemo.component.css']
})
export class TwoWayBindingDemoComponent implements OnInit {

  user = {
    name: '',
    age: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
