import { GraphicModule } from './../../components/graphic/graphic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { CurrentInfoCardModule } from 'src/app/components/current-info-card/current-info-card.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { GraphicsCondominiumComponent } from './graphics-condominium.component';

@NgModule({
  imports: [
    CommonModule,
    InfoCardModule,
    CurrentInfoCardModule,
    HeaderModule,
    GraphicModule,
  ],
  declarations: [GraphicsCondominiumComponent],
  exports: [GraphicsCondominiumComponent],
})
export class GraphicsCondominiumModule { }
