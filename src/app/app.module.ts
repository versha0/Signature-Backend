import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {SignaturePadModule} from 'angular2-signaturepad';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
