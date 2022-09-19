import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdvComponent } from './pdv.component';

const routes: Routes = [
  {
    path:"",
    component : PdvComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PdvRoutingModule { }
