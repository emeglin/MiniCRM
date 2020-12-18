import { Injectable } from '@angular/core';
import DataJson from '../assets/data.json'
import {Person} from './models/person'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private persontab: Array<Person>
  private cust_tab: Array<Person>
  private sell_tab: Array<Person>
  constructor() { }

  getPeople(){
    return DataJson.person
  }
  getcustomer(){
    this.persontab = DataJson.person
    this.cust_tab = this.persontab.filter(cust => cust.is_customer == true)
    return this.cust_tab
  }

  getsellers(){
    this.persontab = DataJson.person
    this.sell_tab = this.persontab.filter(sell => sell.is_customer == false)
    return this.sell_tab
  }

  getTabSale(){
    return DataJson.tabSale
  }

  getCompagny(){
    return DataJson.company
  }
  
  postCompagny(newCompagny){
    
  }
}
