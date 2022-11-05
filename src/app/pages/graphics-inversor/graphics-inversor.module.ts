import { GraphicsInversorComponent } from './graphics-inversor.component';
import { GraphicsInversorRoutingModule } from './graphics-inversor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { CurrentInfoCardModule } from 'src/app/components/current-info-card/current-info-card.module';

@NgModule({
  imports: [
    CommonModule,
    GraphicsInversorRoutingModule,
    InfoCardModule,
    CurrentInfoCardModule,
  ],
  declarations: [GraphicsInversorComponent],
  exports: [GraphicsInversorComponent],
})
export class GraphicsInversorModule { }
