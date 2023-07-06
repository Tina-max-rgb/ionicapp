import { Component, OnInit } from '@angular/core';
import { Employe } from '../models/employe.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-creation-employe',
  templateUrl: './creation-employe.page.html',
  styleUrls: ['./creation-employe.page.scss'],
})
export class CreationEmployePage implements OnInit {
  post: Employe = {} as Employe;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  async createEmploye() {
    if (!this.formValidation()) {
      return;
    }

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await loader.present();

    try {
      await this.firestore.collection('employes').add(this.post);
    } catch (e) {
      this.showToast(String(e));
    }

    await loader.dismiss();
    this.navCtrl.navigateRoot('home');
  }

  formValidation(): boolean {
    if (!this.post.nom) {
      this.showToast('Please enter name');
      return false;
    }

    if (!this.post.prenom) {
      this.showToast('Please enter Firstname');
      return false;
    }

    return true;
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
