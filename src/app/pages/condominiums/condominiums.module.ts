import { CondominiumsRoutingModule } from './condominiums-routing.module';
import { CondominiumsComponent } from './condominiums.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CondominiumsRoutingModule,
  ],
  declarations: [CondominiumsComponent],
  exports: [CondominiumsComponent],
})
export class CondominiumsModule { }
