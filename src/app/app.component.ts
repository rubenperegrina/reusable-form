import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubForm2Component } from './components/sub-form2/sub-form2.component';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="heroForm">
    <div>
      <label>Hero</label>
      <div class="col">
        <input
          formControlName="heroName"
          type="text"
          nbInput
          placeholder="Hero name"
        />
        <input formControlName="aka" type="text" nbInput placeholder="AKA" />
      </div>
    </div>

    <div>
      <label>Super Power</label>
      <div class="col">
        <app-sub-form2></app-sub-form2>
      </div>
    </div>

    <div>
      <label>Hobbies</label>
      <div class="col">
        <app-sub-form1
          [parentForm]="heroForm"
          [formGroup]="$any(heroForm.get('subForm1'))"
        ></app-sub-form1>
      </div>
    </div>
    <button (click)="logFormData()" nbButton status="primary">Submit</button>
  </form>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  @ViewChild(SubForm2Component, { static: true }) public subForm2!: SubForm2Component;

  public heroForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.heroForm = this.formBuilder.group({
      heroName: ['', Validators.required],
      aka: ['', Validators.required],
      powers: this.subForm2.createFormGroup(),
      subForm1: this.formBuilder.group({
        favoriteHobby: ['', Validators.required]
      })
    })
  }

  public logFormData(): void {
    console.log(this.heroForm.value);
  }
}
