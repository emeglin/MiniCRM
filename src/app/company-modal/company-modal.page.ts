import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { mainModule } from 'process';
import {Company} from '../models/company';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.page.html',
  styleUrls: ['./company-modal.page.scss'],
})
export class CompanyModalPage implements OnInit {

  private company_name: string=""
  private company_address: string=""
  private company_code: string=""
  private company_city : string=""
  private newCompany: Company

  addCompanyForm: FormGroup
  constructor(
    private fb: FormBuilder,
    public modalCtrl: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.addCompanyForm = this.fb.group({
      company_name:['',Validators.minLength(3)],
      company_address:['',Validators.minLength(3)],
      company_code:['',Validators.minLength(3)],
      company_city:['',Validators.minLength(3)]
    })
  }

  submitForm(){
    if(this.addCompanyForm.valid){
      this.newCompany = {
        company_id: 3 ,
        name: this.company_name,
        address: this.company_address,
        zip_code: this.company_code,
        city: this.company_city
      }
      this.modalCtrl.dismiss(JSON.stringify(this.newCompany));
    }
  }

  return() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({ 'dismissed': true});
  }
}
