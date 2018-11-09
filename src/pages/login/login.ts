import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'; //Importing AngularFireAuth

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularFireAuth: AngularFireAuth) { //Adding the angularFireAuth here
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
//The needed functions "register" and "login" here:
register(email, password) {
this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
  this.navCtrl.setRoot('RegisterPage', {email});
});
}
login(email, password) {
  this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
    this.navCtrl.setRoot('HomePage', {email});
  });
}
}
