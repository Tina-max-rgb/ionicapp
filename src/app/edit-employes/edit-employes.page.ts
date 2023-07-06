import { Component, OnInit } from '@angular/core';
import { Employe } from '../models/employe.model';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-edit-employes',
  templateUrl: './edit-employes.page.html',
  styleUrls: ['./edit-employes.page.scss'],
})
export class EditEmployesPage implements OnInit {
  post: Employe = {} as Employe;
  id: any;

  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string) {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    await loader.present();
    this.firestore
      .doc<any>('employes/' + id) // Ajout du slash (/) pour spécifier le chemin complet
      .valueChanges()
      .subscribe((data) => {
        this.post.nom = data?.nom;
        this.post.prenom = data?.prenom;
        loader.dismiss();
      });
  }

  async updateEmploye(post: Employe) {
    if (!this.formValidation()) {
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      await loader.present();
      try {
        await this.firestore.doc('employes/' + this.id) // Ajout du slash (/) pour spécifier le chemin complet
          .update(this.post);
        this.showToast('Employee updated successfully');
      } catch (e) {
        this.showToast('An error occurred while updating the employee');
      }
      await loader.dismiss();
      this.navCtrl.navigateRoot('home');
    }
  }

  formValidation(): boolean {
    if (!this.post.nom) {
      this.showToast('Please enter a name');
      return false;
    }
    if (!this.post.prenom) {
      this.showToast('Please enter a firstname');
      return false;
    }
    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
        position: 'bottom'
      })
      .then((toastData) => {
        toastData.present();
      });
  }
}
