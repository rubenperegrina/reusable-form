import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SubForm1Component } from './components/sub-form1/sub-form1.component';
import { SubForm2Component } from './components/sub-form2/sub-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    SubForm1Component,
    SubForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
