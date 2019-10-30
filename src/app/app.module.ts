import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import {FormsModule} from '@angular/forms';
import { TdFormComponent } from './td-form/td-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareValidatorDirective,
    TdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
