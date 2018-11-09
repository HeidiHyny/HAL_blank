import { Component, Inject, ViewChild } from '@angular/core'; //Importing the Inject and ViewChild
import { Platform, NavController, NavParams } from 'ionic-angular'; //importing NavController and NavParams
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth'; //Importing the AngularFireAuth

import { rootRenderNodes } from '@angular/core/src/view'; //Importing the rootRenderNodes
import { HomePage } from '../pages/home/home';

@Component({
  // templateUrl: 'app.html'
  //Changing the templateUrl:
  template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  // Writing new code to make the Loginpage the rootpage
  @ViewChild('myNav') nav: NavController
  public rootPage:string = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private angularFireAuth: AngularFireAuth) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
      //Detecting if the user is logged in and direct accordingly to HomePage or LoginPage
      angularFireAuth.auth.onAuthStateChanged(function(user)
      {
        if (user) {
        this.rootPage = 'HomePage';
      }
      else {
      this.rootPage = 'LoginPage';

      }
    });
  });
  }
  //Push to the rootpage on start
ngOnInit() {
  this.nav.push(this.rootPage);
}}

