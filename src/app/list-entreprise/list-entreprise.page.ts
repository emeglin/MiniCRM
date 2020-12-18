import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
import {Company} from '../models/company'
import {CompanyModalPage} from '../company-modal/company-modal.page'
import { ModalController } from '@ionic/angular';
import {Router} from '@angular/router'

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.page.html',
  styleUrls: ['./list-entreprise.page.scss'],
})
export class ListEntreprisePage implements OnInit {


  private tabcompany: Array<Company>
  private tabName = ['EDF','ORANGE','GRDF',"Mairie de paris","SFR", "Enedis", "OVH", "Aldi" ]


  constructor(
    private router: Router,
    private api: ApiService,
    private  modacontroller: ModalController
    ) { }

  ngOnInit() {
    this.tabcompany = this.api.getCompagny()


    
  }


  getDetailView(id){

    let result = this.tabcompany.filter(myid => myid.company_id == id)
    this.router.navigate(['details', {url: id, company: JSON.stringify(result)}])
  }
  async addCompany(){
    const modal = await this.modacontroller.create({
      component: CompanyModalPage,
    })
    modal.onDidDismiss().then((newcompany => {this.api.postCompagny(newcompany['data'])}))
    ;
    return await modal.present();
    }


    listenInput(input){

        console.log('Input ', input)
        let result: Array<Company> = this.tabcompany.filter(search => search.name == input)
        let id = result[0].company_id
        this.getDetailView(id)
      
    }



  doRefresh(event) {
    console.log('Begin async operation');
    this.tabcompany.unshift({
      company_id: 9,
      name: "Société Générale", 
      address: "10 ru du fort",
      zip_code: "59162",
      city: "Seclin"
    })
    setTimeout(() => {

      event.target.complete();
    }, 2000);
  }

}
