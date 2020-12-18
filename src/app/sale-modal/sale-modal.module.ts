import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { SaleModalPageRoutingModule } from './sale-modal-routing.module';

import { SaleModalPage } from './sale-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SaleModalPage]
})
export class SaleModalPageModule {}
