import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: any[] = [];

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore
  ) {}

  async ionViewWillEnter() {
    await this.getEmployes();
  }

  async getEmployes() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    await loader.present();

    try {
      this.firestore
        .collection<any>('employes')
        .snapshotChanges()
        .subscribe((data: any[]) => {
          this.posts = data.map((e) => ({
            id: e.payload.doc.id,
            nom: e.payload.doc.data().nom,
            prenom: e.payload.doc.data().prenom,
          }));
          loader.dismiss();
        });
    } catch (e) {
      loader.dismiss();
      this.showToast('Error');
    }
  }

  async deleteEmployes(id: string) {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    await loader.present();

    try {
      await this.firestore.doc('employes/' + id).delete();
      loader.dismiss();
    } catch (e) {
      loader.dismiss();
      this.showToast('Error');
    }
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => {
        toastData.present();
      });
  }
}
