import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {compareValidator} from '../../shared/compare-validator.directive';
import {UserService} from '../../shared/user.service';
import {uniqueEmailValidator} from '../../shared/unique-email-validator.directive';
import {uniqueUsernameValidator} from '../../shared/unique-username-validator.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      username: ['',
        null, // sync validation
        uniqueUsernameValidator(this.userService) // async validation
      ],
      email: ['',
        Validators.required, // sync validation
        uniqueEmailValidator(this.userService) // async validation
      ],
      emailConfirm: ['',
        [Validators.required, compareValidator('email')], // sync validation
        uniqueEmailValidator(this.userService) // async validation
      ],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, compareValidator('password')]],
    });
  }

  get username() {
    return this.reactiveForm.get('username');
  }

  get email() {
    return this.reactiveForm.get('email');
  }

  get emailConfirm() {
    return this.reactiveForm.get('emailConfirm');
  }

  get password() {
    return this.reactiveForm.get('password');
  }

  get passwordConfirm() {
    return this.reactiveForm.get('passwordConfirm');
  }
}
