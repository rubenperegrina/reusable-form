import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sub-form2',
  template: `
  <form class="col" [formGroup]="powersForm">
    <select formControlName="superPower" placeholder="Select super power">
      <option value="Stoic Code">Stoic Code</option>
      <option value="Color Dreamer">Color Dreamer</option>
      <option value="Lightning Fingers">Lightning Fingers</option>
      <option value="Super I/O">Super I/O</option>
    </select>
    <textarea
      formControlName="powerDescription"
      nbInput
      placeholder="Textarea"
    ></textarea>
  </form>
  `,
  styles: [
  ]
})
export class SubForm2Component implements OnInit {
  public powersForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.powersForm = this.formBuilder.group({
      superPower: ['', Validators.required],
      powerDescription: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public createFormGroup(): FormGroup {
    return this.powersForm;
  }
}
