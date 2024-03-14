import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-TemplateDrivenForm',
  templateUrl: './TemplateDrivenForm.component.html',
  styleUrls: ['./TemplateDrivenForm.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  onSubmit(templateForm: NgForm) {
    if (templateForm.valid) {
      // Extracting form values
      const formData = templateForm.value;

      // Perform actions with form data, e.g., send to a service
      console.log('Template-Driven Form Submitted:', formData);

      // Reset the form after successful submission
      templateForm.resetForm();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
