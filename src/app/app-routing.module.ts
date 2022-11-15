import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'condominium-listing',
    loadChildren: () => import('./pages/condominium-listing/condominium-listing.module')
      .then(m => m.CondominiumListingModule)
  },
  {
    path: 'graphics/:condominiumId',
    loadChildren: () => import('./pages/graphics/graphics.module')
      .then(m => m.GraphicsModule)
  },
  {
    path: 'graphics-inversor/:inversorSn',
    loadChildren: () => import('./pages/graphics-inversor/graphics-inversor.module')
      .then(m => m.GraphicsInversorModule)
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
