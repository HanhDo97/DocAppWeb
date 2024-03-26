import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  static showloading() {
    let html = '<div class="app-loading"><svg class="spinner" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/></svg></div>';
    document.getElementById("app-loading")!.innerHTML = html;
  }

  static hideloading() {
    let html = '';
    document.getElementById("app-loading")!.innerHTML = html;
  }
}
