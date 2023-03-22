import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-sub-form1',
  template: `
  <form [formGroup]="subForm1">
    <input
      nbInput
      placeholder="Hobby"
      formControlName="favoriteHobby"
      type="text"
    />
    <button (click)="logForms()" nbButton status="primary">Submit</button>
  </form>
  `,
  styles: [
  ]
})
export class SubForm1Component implements OnInit {
  public subForm1!: FormGroup;
  @Input() parentForm!: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  public ngOnInit(): void {
    this.subForm1 = this.controlContainer.control as FormGroup;
  }


  public logForms(): void {
    console.log('Hobbies form', this.subForm1);
    console.log('Parent (Hero) form', this.parentForm);
  }
}
