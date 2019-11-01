import {Directive} from '@angular/core';
import {UserService} from './user.service';
import {AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function uniqueUsernameValidator(userService: UserService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.getByUserByUsername(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? {'uniqueUsername': true} : null;
      })
    );
  };
}

@Directive({
  selector: '[uniqueUsername]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective, multi: true}]
})
export class UniqueUsernameValidatorDirective {

  constructor(private userService: UserService) {
  }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniqueUsernameValidator(this.userService)(c);
  }

}
