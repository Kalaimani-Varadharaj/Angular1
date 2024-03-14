import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-TypeScriptDemo',
  templateUrl: './TypeScriptDemo.component.html',
  styleUrls: ['./TypeScriptDemo.component.css']
})
export class TypeScriptDemoComponent implements OnInit {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  selectedOption: string = 'default';
  isButtonDisabled: boolean = false;

  showMessage(message: string): void {
    alert(message);
  }

  handleSelection(option: string): void {
    this.selectedOption = option;
  }

  toggleButton(): void {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  constructor() { }

  ngOnInit() {
  }

}
