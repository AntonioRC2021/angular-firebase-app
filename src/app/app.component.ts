import { Component } from '@angular/core';

import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {

    var config = {
      apiKey: "AIzaSyDScu-txTpIATAwFzFjb62pGDfSPS3bMTI",
      authDomain: "final-project-3f7ee.firebaseapp.com",
      databaseURL: "https://final-project-3f7ee.firebaseio.com",
      projectId: "final-project-3f7ee",
      storageBucket: "final-project-3f7ee.appspot.com",
      messagingSenderId: "1028603458411"
    };
    initializeApp(config);

    var root = database().ref();

    root.on('value', function(snap) {

      console.log(snap.val());

    });
  }
}
