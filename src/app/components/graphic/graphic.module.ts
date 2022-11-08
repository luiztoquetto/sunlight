import { NgApexchartsModule } from 'ng-apexcharts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicComponent } from './graphic.component';

@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,
  ],
  declarations: [
    GraphicComponent,
  ],
  exports:[
    GraphicComponent,
  ],
})
export class GraphicModule { }
