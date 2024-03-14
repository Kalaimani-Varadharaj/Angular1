import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ReactiveForm',
  templateUrl: './ReactiveForm.component.html',
  styleUrls: ['./ReactiveForm.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form with FormBuilder
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onReactiveFormSubmit() {
    if (this.reactiveForm.valid) {
      // Extracting form values
      const formData = this.reactiveForm.value;

      // Perform actions with form data, e.g., send to a service
      console.log('Reactive Form Submitted:', formData);

      // Reset the form after successful submission
      this.reactiveForm.reset();
    }
  }

}
