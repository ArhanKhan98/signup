import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchPasswordDirective } from '../app/directives/password-pattern.directive';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MatchPasswordDirective
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
