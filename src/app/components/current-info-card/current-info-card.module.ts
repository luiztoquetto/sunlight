import { CurrentInfoCardComponent } from './current-info-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CurrentInfoCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CurrentInfoCardComponent,
  ],
})
export class CurrentInfoCardModule { }
