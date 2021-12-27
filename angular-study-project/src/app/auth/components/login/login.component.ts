import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  @Input() loginErrorMessage: string;
  @Input() loginBtnDisabled: boolean;
  @Output() loginFormSubmit = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }

  submit(): void {
    if (this.form.invalid) return
    this.loginFormSubmit.emit(this.form.value);
  }
}
