import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  @Input() registrationBtnDisabled: boolean;
  @Output() registrationFormSubmit = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
    this.addValidators();
  }

  initForm(): void {
    this.form = new FormGroup({
      login: new FormControl(''),
      passwords: new FormGroup({
        password: new FormControl(''),
        passwordConfirm: new FormControl('')
      })
    })
  }

  addValidators(): void {
    const loginValidators = Validators.compose([Validators.required]);
    const passwordValidators = Validators.compose([Validators.required, Validators.minLength(5)]);
    const passwordConfirmValidators = Validators.compose([this.equalPasswordsValidator.bind(this)]);
    

    this.form.get('login').setValidators(loginValidators);
    this.form.get('passwords.password').setValidators(passwordValidators);
    this.form.get('passwords.passwordConfirm').setValidators(passwordConfirmValidators);
  }



  equalPasswordsValidator(control: AbstractControl): ValidationErrors {
    const password1 = this.form.get('passwords.password').value.trim();
    const password2 = control.value.trim();
    return password1 === password2 ? null : { equalPasswords: true };
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      const newUser = {
        login: this.form.get('login').value,
        password: this.form.get('passwords.password').value
      }
      this.registrationFormSubmit.emit(newUser);
    }
  }

}
