import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserContainerComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      age: new FormControl(null, [Validators.required, Validators.min(15), Validators.max(100)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      company: new FormControl(null, Validators.maxLength(35)),
      departament: new FormControl(null, Validators.minLength(6)),
      // photo: new FormControl(null),
      gender: new FormControl(null, Validators.required)
    });
  }

}
