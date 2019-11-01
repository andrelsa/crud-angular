import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UniqueEmailValidatorDirective } from './shared/unique-email-validator.directive';
import {HttpClientModule} from '@angular/common/http';
import { UniqueUsernameDirective } from './shared/unique-username.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompareValidatorDirective,
    TdFormComponent,
    ReactiveFormComponent,
    UniqueEmailValidatorDirective,
    UniqueUsernameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
