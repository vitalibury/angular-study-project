import { Component, OnInit } from '@angular/core';
import { DataService, Person } from '../services/data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Person[];

  constructor(private dataService: DataService) { 
    this.contacts = this.dataService.contacts;
  }

  ngOnInit(): void {
  }

}
