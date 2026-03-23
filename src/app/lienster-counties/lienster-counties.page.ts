import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lienster-counties',
  templateUrl: './lienster-counties.page.html',
  styleUrls: ['./lienster-counties.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonButtons]
})
export class LiensterCountiesPage implements OnInit {

  counties: string[] = ["Carlow", "Dublin", "Kildare",
"Kilkenny", "Laois", "Longford", "Louth", "Meath",
"Offaly", "Westmeath", "Wexford", "Wicklow"];

  constructor() { }

  ngOnInit() {
  }

}
