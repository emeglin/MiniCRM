import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list-entreprise',
    loadChildren: () => import('./list-entreprise/list-entreprise.module').then( m => m.ListEntreprisePageModule)
  },
  {
    path: 'sale-modal',
    loadChildren: () => import('./sale-modal/sale-modal.module').then( m => m.SaleModalPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'company-modal',
    loadChildren: () => import('./company-modal/company-modal.module').then( m => m.CompanyModalPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
