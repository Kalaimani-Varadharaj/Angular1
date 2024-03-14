import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-EventBindingDemo',
  templateUrl: './EventBindingDemo.component.html',
  styleUrls: ['./EventBindingDemo.component.css']
})
export class EventBindingDemoComponent implements OnInit {
  buttonClicked: boolean = false;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  onButtonClick(): void {
    this.buttonClicked = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
