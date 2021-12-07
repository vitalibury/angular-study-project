import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  addressesForm: FormGroup;
  addressesArray: FormArray;
  @Output() formArrayCreated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.addressesArray = new FormArray([this.createAddressFormGroup()]);
    this.addressesForm = new FormGroup({addresses: this.addressesArray});
    this.formArrayCreated.emit(this.addressesArray);
  }

  get addressesControls() {
    return this.addressesArray.controls as FormGroup[];
  }

  createAddressFormGroup(): FormGroup {
    const addressGroup = new FormGroup({
      address: new FormControl(null, Validators.required),
      city: new FormControl(),
      zip: new FormControl()
    });

    this.changeZipControl(addressGroup);

    addressGroup.get('city').valueChanges
      .pipe(
        takeWhile(() => (!!addressGroup && !!addressGroup.get('city')))  // убивается ли подписка таким образом?
      )
      .subscribe(() => {
        this.changeZipControl(addressGroup);
      });

    return addressGroup;
  }

  addAddress(): void {
    const newAddressForm = this.createAddressFormGroup();
    this.addressesArray.push(newAddressForm);
  }

  deleteAddress(index: number): void {
    this.addressesControls.splice(index, 1);
    this.addressesArray.updateValueAndValidity();
  }

  changeZipControl(formGroup: FormGroup): void {
    const cityControl = formGroup.get('city');
    const zipControl = formGroup.get('zip');
    if (cityControl.value) {
      zipControl.setValidators(Validators.required);
      zipControl.enable();
    } else {
      zipControl.setValue('');
      zipControl.disable();
    }
  }

}
