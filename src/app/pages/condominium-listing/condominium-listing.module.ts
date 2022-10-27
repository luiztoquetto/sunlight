import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondominiumListingComponent } from "./condominium-listing.component";
import { CondominiumListingRoutingModule } from "./condominium-listing-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CondominiumListingRoutingModule,
  ],
  declarations: [CondominiumListingComponent],
  exports: [CondominiumListingComponent],
})
export class CondominiumListingModule { }
