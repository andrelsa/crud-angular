import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompareValidatorDirective} from './compare-validator.directive';
import {UniqueEmailValidatorDirective} from './unique-email-validator.directive';
import {UniqueUsernameValidatorDirective} from './unique-username-validator.directive';

@NgModule({
  declarations: [
    CompareValidatorDirective,
    UniqueEmailValidatorDirective,
    UniqueUsernameValidatorDirective
  ],
  imports: [
    CommonModule // use ngIf, ngFor
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule {
}
