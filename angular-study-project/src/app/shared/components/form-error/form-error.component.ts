import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { setError } from './form-errors';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit, OnDestroy {

  @Input() control: AbstractControl;

  subscription: Subscription = new Subscription();

  message: String;

  constructor() { }

  ngOnInit(): void {
    this.defineErrorMessage(this.control);
    this.subscription.add(this.control.statusChanges.subscribe(() => {
      this.defineErrorMessage(this.control);
    }
    ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  defineErrorMessage(control: AbstractControl) {
    if (control.errors) {
      if (control.errors['required']) {
        this.message = 'This field is required';
      } else {
        for (const err in control.errors) {
          if (control.errors.hasOwnProperty(err)) {
            const errorMessage = setError(err, control.errors);
            if (errorMessage) {
              this.message = errorMessage;
              break;
            }
          }
        }
      }
    }
  }

}
