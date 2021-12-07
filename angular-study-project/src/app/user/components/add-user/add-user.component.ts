import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';
import { UsersService } from '../..';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      age: new FormControl(null, [Validators.required, Validators.min(15), Validators.max(100)]),
      email: new FormControl(
        null,
        [Validators.required, , Validators.email, Validators.pattern(/@gmail.com\b/)],
        [this.existEmailAsyncValidator()]
        ),
      company: new FormControl(null, Validators.maxLength(35)),
      department: new FormControl(null, Validators.minLength(6)),
      // photo: new FormControl(null),
      gender: new FormControl(null, Validators.required)
    });
  }

  checkFormValid(controlName: String): Boolean {
    const control = this.form.controls[`${controlName}`];
    const hasError = control.invalid && (control.dirty || control.touched);
    return hasError;
  } 

  existEmailAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors>  => {
        return this.usersService.isEmailExist(control.value).pipe(map(
          existence => existence ? {emailExist: true} : null
        ), delay(1000));
      }
  }

  addControl(addressesArrayForm: FormArray) {
    this.form.addControl('addresses', addressesArrayForm);
  }

}
