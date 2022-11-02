import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsComponent } from "./graphics.component";
import { GraphicsRoutingModule } from "./graphics-routing.module";
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { CurrentInfoCardModule } from 'src/app/components/current-info-card/current-info-card.module';

@NgModule({
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    InfoCardModule,
    CurrentInfoCardModule,
  ],
  declarations: [GraphicsComponent],
  exports: [GraphicsComponent],
})
export class GraphicsModule { }
