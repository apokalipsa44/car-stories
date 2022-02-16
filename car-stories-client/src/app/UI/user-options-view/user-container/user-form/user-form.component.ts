import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(40),
        Validators.pattern('[a-zA-Z]'),
      ]),
      lastName: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(40),
        Validators.pattern('[a-zA-Z]'),
      ]),
      login: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(40),
      ]),
      passowrd: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(40),
      ]),
      email: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(40),
      ]),
      phone: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(16),
        Validators.pattern('[0-9]'),
      ]),
      accountNumber: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(26),
        Validators.pattern('[0-9]'),
      ]),
    });
  }

  saveUser(): void {
    console.log('user: ', this.userForm?.value);
  }
}
