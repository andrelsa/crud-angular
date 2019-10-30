import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appCompareValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true}]
})
export class CompareValidatorDirective implements Validator {

  @Input('appCompareValidator') controlNameToCompare: string;

  validate(c: AbstractControl): ValidationErrors | null {
    const controlToCompare = c.root.get(this.controlNameToCompare);
    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value !== c.value ? {'appCompareValidator': true} : null;
  }

}
