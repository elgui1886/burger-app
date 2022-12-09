
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LOCAL_STORAGE_ORDERS_KEY } from './config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Burger-app Elia';
  constructor() {
    window.onbeforeunload = (event) => localStorage.removeItem(LOCAL_STORAGE_ORDERS_KEY);
  }
}
