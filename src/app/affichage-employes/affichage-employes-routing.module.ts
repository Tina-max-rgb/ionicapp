import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffichageEmployesPage } from './affichage-employes.page';

const routes: Routes = [
  {
    path: '',
    component: AffichageEmployesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffichageEmployesPageRoutingModule {}
