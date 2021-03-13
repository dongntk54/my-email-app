import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = null;

  constructor() {}

  login(): void {
    this.loggedIn = true;
  }

  signup(): void {
    this.loggedIn = true;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
