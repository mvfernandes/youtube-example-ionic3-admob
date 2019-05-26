import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

declare var admob;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.runAds();
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }

  runAds() {
    const admobid = {
      banner: 'ca-app-pub-3940256099942544/6300978111',
      interstitial: 'ca-app-pub-3940256099942544/1033173712',
    }
    admob.banner.config({
      id: admobid.banner,
      isTesting: true,
      autoShow: true,
    })
    admob.banner.prepare()

    admob.interstitial.config({
      id: admobid.interstitial,
      isTesting: true,
      autoShow: false,
    })
    admob.interstitial.prepare()

  }
}
