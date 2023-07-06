import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

import { from } from 'rxjs';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.FIREBASE_CONFIG)), // Initialisation de Firebase
  AngularFireModule.initializeApp(environment.FIREBASE_CONFIG), AngularFirestoreModule,
  AngularFireModule, AngularFireAuthModule, FormsModule

],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
 
  bootstrap: [AppComponent],
})
export class AppModule {}
