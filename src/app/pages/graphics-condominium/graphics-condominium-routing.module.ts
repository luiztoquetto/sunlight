import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsCondominiumComponent } from './graphics-condominium.component';

const routes: Routes = [
  {
    path: '',
    component: GraphicsCondominiumComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
