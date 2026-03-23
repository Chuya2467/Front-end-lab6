import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';   //library to change link

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, IonBackButton, IonButtons],
})
export class HomePage {
  constructor() {}
}
