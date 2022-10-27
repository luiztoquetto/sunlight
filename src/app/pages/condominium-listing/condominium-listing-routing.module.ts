import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondominiumListingComponent } from "./condominium-listing.component";

const routes: Routes = [
  {
    path: '',
    component: CondominiumListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominiumListingRoutingModule { }
