import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsInverterComponent } from './graphics-inverter.component';

const routes: Routes = [
  {
    path: '',
    component: GraphicsInverterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
