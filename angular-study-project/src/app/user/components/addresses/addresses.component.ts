import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  addressesArrayForm: FormArray;
  @Output() formArrayCreated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.addressesArrayForm = new FormArray([this.createAddressFormGroup()]);
    this.formArrayCreated.emit(this.addressesArrayForm);
  }

  createAddressFormGroup(): FormGroup {
    const addressGroup = new FormGroup({
      address: new FormControl(null, Validators.required),
      city: new FormControl(),
      zip: new FormControl()
    });
    return addressGroup;
  }

  addAddress(): void {
    const newAddressForm = this.createAddressFormGroup();
    this.addressesArrayForm.push(newAddressForm);
  }

}
