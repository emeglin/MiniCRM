import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {Person} from '../models/person';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})


export class DetailsPage implements OnInit {

  private person
  private company

  private name: String ="";
  private nameC: String="";
  private firstname: String ="";
  private mail: String ="";
  private date: String="";
  private phone: String ="";
  private address: String="";
  private zip_code: String="";
  private city: String="";
  private companyW: string ="";

  constructor( 
    private activatedRoute: ActivatedRoute ,
    private api: ApiService
    ) { }

  ngOnInit() {

    this.person = JSON.parse(this.activatedRoute.snapshot.paramMap.get('person'))
  if(this.person != null){
    this.name = this.person[0].name
    this.firstname = this.person[0].firstname
    this.mail = this.person[0].mail
    this.phone = this.person[0].phone
    this.date = this.person[0].sale_date
  }

  
    this.company= JSON.parse(this.activatedRoute.snapshot.paramMap.get('company'))
    
    console.log(this.company)
    if(this.company != null){
    this.nameC = this.company[0].name
    this.address = this.company[0].address
    this.zip_code = this.company[0].zip_code
    this.city = this.company[0].city
    }
  }

}
