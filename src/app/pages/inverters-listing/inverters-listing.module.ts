import { InvertersListingComponent } from './inverters-listing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from "../../components/header/header.module";
import { CardModule } from '../../components/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    CardModule
  ],
  declarations: [InvertersListingComponent],
  exports: [InvertersListingComponent],
})
export class InvertersListingModule { }
