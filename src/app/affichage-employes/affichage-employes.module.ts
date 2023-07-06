import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AffichageEmployesPageRoutingModule } from './affichage-employes-routing.module';

import { AffichageEmployesPage } from './affichage-employes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AffichageEmployesPageRoutingModule
  ],
  declarations: [AffichageEmployesPage]
})
export class AffichageEmployesPageModule {}
