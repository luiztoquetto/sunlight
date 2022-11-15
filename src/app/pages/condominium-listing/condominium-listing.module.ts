import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondominiumListingComponent } from "./condominium-listing.component";
import { CondominiumListingRoutingModule } from "./condominium-listing-routing.module";
import { HeaderModule } from "../../components/header/header.module";
import { CardModule } from '../../components/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    CondominiumListingRoutingModule,
    HeaderModule,
    CardModule
  ],
  declarations: [CondominiumListingComponent],
  exports: [CondominiumListingComponent],
})
export class CondominiumListingModule { }
