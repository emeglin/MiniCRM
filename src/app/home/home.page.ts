import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
import {SaleModalPage} from '../sale-modal/sale-modal.page'
import { ModalController } from '@ionic/angular';
import {Person} from '../models/person'
import {TabSale} from '../models/TabSale'
import {Router} from '@angular/router'
import { Sale } from "../models/sale";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  private tabcust: Array<Person>
  private tabsale =[]
  private choosenSale = []
  private tPrice: number

  constructor( 
    private api: ApiService,
    private  modacontroller: ModalController,
    private router: Router
    ) { }

  ngOnInit() {
    this.tabcust = this.api.getcustomer()
    this.tabsale = this.api.getTabSale()

    console.log('Get only customer',this.api.getcustomer())
    
  }


async addSaleModal(){
  const modal = await this.modacontroller.create({
    component: SaleModalPage,
  })
 // modal.onDidDismiss().then((task => {this.addtask(task['task'])}))
  ;
  return await modal.present();
  }

  getDetailView(id){
    
    let result = this.tabcust.filter(myid => myid.person_id == id)
    this.router.navigate(['details', {url: id, person: JSON.stringify(result)}])
  }

  listenInput(input){

    console.log('Input ', input)
    let result: Array<Person> = this.tabcust.filter(search => search.name == input)
    let id = result[0].person_id
    this.getDetailView(id)
  
}

  doRefresh(event) {
    console.log('Begin async operation');
    this.tabcust.unshift({
      person_id: 4,
      name: "Hallyday", 
      firstname: "Johnny",
      mail: "rip@mail.com",
      phone: "3630",
      compagny_id: 4,
      is_customer: true,
      sale_date: "18-12-2020"
    })
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
