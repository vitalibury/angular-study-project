import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { setSimpleError, setComplexError } from './form-errors';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit, OnDestroy {

  @Input() control: AbstractControl;

  message: String;

  subscription: Subscription = new Subscription();

  errorContent: String;

  constructor() { }

  ngOnInit(): void {
    this.defineErrorMessage(this.control);
    // this.subscription.add(this.control.valueChanges.subscribe(() => {
    //   this.defineErrorMessage(this.control);
    // }
    // ));
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
      for (const err in control.errors) {
        if (control.errors.hasOwnProperty(err)) {
          console.log(err)
          const complexError = setComplexError(err, this.control.errors);
          if (complexError) {
            console.log(complexError)
            this.message = complexError;
          }
        }
      }
      for (const err in control.errors) {
        console.log(control.errors)
        if (control.errors.hasOwnProperty(err)) {
          const simpleError = setSimpleError(err);
          console.log(control.errors)
          if (simpleError) {
            console.log(simpleError)
            this.message = simpleError;
          }
        }
      }
    }
  }

}
