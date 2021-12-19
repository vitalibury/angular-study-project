import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-form-page-popup',
  templateUrl: './leave-form-page-popup.component.html',
  styleUrls: ['./leave-form-page-popup.component.scss']
})
export class LeaveFormPagePopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

}
