import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { mainModule } from 'process';
import {Person} from '../models/person';

@Component({
  selector: 'app-sale-modal',
  templateUrl: './sale-modal.page.html',
  styleUrls: ['./sale-modal.page.scss'],
})
export class SaleModalPage implements OnInit {

  public cust_name: string=""
  addSaleForm: FormGroup
  custTab : Array<Person> =[]



  constructor(
    private fb: FormBuilder,
    public modalCtrl: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    // this.custTab.push({
    //   person_id: 1,
    //   name: "Dupont", 
    //   fisrtname: "Fred",
    //   mail: "fred@mail.fr",
    //   phone: "0610101010",
    //   compagny_id: 1,
    //   is_customer: true,
    //   sale_date: "10-12-2020"
    // },
    // {
    //   person_id: 2,
    //   name: "Dupretz", 
    //   fisrtname: "Paul",
    //   mail: "paul@mail.fr",
    //   phone: "0610101011",
    //   compagny_id: 2,
    //   is_customer: true,
    //   sale_date: "11-12-2020"
    // },
    // {
    //   person_id: 3,
    //   name: "Lapin", 
    //   fisrtname: "Christine",
    //   mail: "cricri@mail.fr",
    //   phone: "0610101013",
    //   compagny_id: 3,
    //   is_customer: true,
    //   sale_date: "14-12-2020"
    // }
    // )

    //this.storage.set("cust", JSON.stringify(this.custTab))

    //Pour récupérer un élément du storage avec sa clé 
    // this.storage.get('cust').then((val)=> {
    //   this.custTab = JSON.parse(val)
    //   console.log("Tableau des client au ngOninit " , this.custTab)
    // })


    //Pour TOUT delete le storage 
    //this.storage.clear()

    
  //Validation du formulaire avec les champs requis 
  this.addSaleForm = this.fb.group({
      cust_name:['',Validators.minLength(3)],
      
    })
  }

  submitForm(){
    if(this.addSaleForm.valid){
      console.log("OK")
      this.modalCtrl.dismiss();
    }
  }


  return() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({ 'dismissed': true});
  }

}
