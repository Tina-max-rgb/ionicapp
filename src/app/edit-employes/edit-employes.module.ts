import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEmployesPageRoutingModule } from './edit-employes-routing.module';

import { EditEmployesPage } from './edit-employes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEmployesPageRoutingModule
  ],
  declarations: [EditEmployesPage]
})
export class EditEmployesPageModule {}
