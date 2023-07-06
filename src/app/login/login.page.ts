import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.mode';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  user ={} as User;
  constructor(
    private toastCtrl :ToastController,
     private loadingCtrl : LoadingController,
     private afAuth: AngularFireAuth,
     private navCtrl: NavController
     ) {}

  ngOnInit() {}

  async login(user: User) {
    if (this.formValidation()) {
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...',
      });
      await loader.present();
  
      try {
        await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(data=>{

        
        // Code à exécuter ici après la création de l'utilisateur
        console.log(data);
        this.navCtrl.navigateRoot('home');
        });
      } catch (e) {
        this.showToast('e.message');
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