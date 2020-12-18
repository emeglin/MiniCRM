import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Person} from '../models/person'


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  private all: Array<Person>
  private tabcust: Array<Person>
  private tabsellers: Array<Person>
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.all = this.api.getPeople() 
    this.tabcust = this.api.getcustomer()
    this.tabsellers = this.api.getsellers()
  }

  segmentChanged(ev: any){
    let seg = ev.detail.value

  }
}
