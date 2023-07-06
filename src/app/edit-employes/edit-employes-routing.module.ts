import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEmployesPage } from './edit-employes.page';

const routes: Routes = [
  {
    path: '',
    component: EditEmployesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEmployesPageRoutingModule {}
