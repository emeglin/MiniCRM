import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyModalPage } from './company-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyModalPageRoutingModule {}
