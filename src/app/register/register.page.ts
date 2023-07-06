import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.mode';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async register(user: User) {
    if (this.formValidation()) {
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...',
      });
      await loader.present();
      
      try {
        const result = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
        console.log(result);

        // Code à exécuter ici

        this.navCtrl.navigateRoot('home');
      } catch (e) {
        this.showToast('erreur');
      }

      await loader.dismiss();
    }
  }

  formValidation(): boolean {
    if (!this.user.email) {
      this.showToast('Please enter an email');
      return false;
    }

    if (!this.user.password) {
      this.showToast('Please enter a password');
      return false;
    }

    return true;
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
