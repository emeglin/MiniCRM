import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CompanyModalPageRoutingModule } from './company-modal-routing.module';

import { CompanyModalPage } from './company-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CompanyModalPage]
})
export class CompanyModalPageModule {}
