import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private localStorage: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: Document) {
    if (isPlatformBrowser(this.platformId)) {
      this.localStorage = document.defaultView?.localStorage;
    }
  }

  setToken(token: string): void {
    this.token = token;
    if (this.localStorage) {
      this.localStorage.setItem('token', token); // Store token in local storage
    }
  }

  getToken(): string | null {
    if (!this.token && this.localStorage) {
      this.token = this.localStorage.getItem('token');
    }
    return this.token;
  }

  clearToken(): void {
    this.token = null;
    if (this.localStorage) {
      this.localStorage.removeItem('token'); // Remove token from local storage
    }
  }
}
