import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OneWayBindingDemo',
  templateUrl: './OneWayBindingDemo.component.html',
  styleUrls: ['./OneWayBindingDemo.component.css']
})
export class OneWayBindingDemoComponent implements OnInit {
  // Example message
  message = 'Welcome to Angular One-Way Binding!';

  // Example input value
  inputValue = 'Type something...';

  // Example button disabled state
  isButtonDisabled = false;

  constructor() { }

  ngOnInit() {
  }

}
