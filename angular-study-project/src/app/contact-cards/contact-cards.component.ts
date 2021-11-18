import { Component, OnInit } from '@angular/core';
import { DataService, Person } from '../services/data.service';

@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.scss']
})
export class ContactCardsComponent implements OnInit {

  contacts: Person[];

  constructor(private dataService: DataService) { 
    this.contacts = this.dataService.contacts;
  }

  ngOnInit(): void {
  }

}
