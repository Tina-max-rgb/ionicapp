import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationEmployePageRoutingModule } from './creation-employe-routing.module';

import { CreationEmployePage } from './creation-employe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationEmployePageRoutingModule
  ],
  declarations: [CreationEmployePage]
})
export class CreationEmployePageModule {}
