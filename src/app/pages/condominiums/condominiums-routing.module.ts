import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondominiumsComponent } from './condominiums.component';

const routes: Routes = [
  {
    path: '',
    component: CondominiumsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominiumsRoutingModule { }
