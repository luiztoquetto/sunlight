import { InvertersListingModule } from './../inverters-listing/inverters-listing.module';
import { InvertersListingComponent } from './../inverters-listing/inverters-listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsCondominiumComponent } from '../graphics-condominium/graphics-condominium.component';
import { GraphicsCondominiumModule } from '../graphics-condominium/graphics-condominium.module';
import { GraphicsComponent } from './graphics.component';

const routes: Routes = [
  {
    path: '',
    component: GraphicsComponent,
    children: [
      {
        path: ':condominiumId',
        component: GraphicsCondominiumComponent,
      },
      {
        path: ':condominiumId/inverters',
        component: InvertersListingComponent,
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GraphicsCondominiumModule,
    InvertersListingModule,
  ],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
