import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationEmployePage } from './creation-employe.page';

const routes: Routes = [
  {
    path: '',
    component: CreationEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationEmployePageRoutingModule {}
