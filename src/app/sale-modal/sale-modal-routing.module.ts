import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleModalPage } from './sale-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SaleModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleModalPageRoutingModule {}
