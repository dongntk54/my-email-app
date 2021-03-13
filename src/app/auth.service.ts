import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = null;

  constructor() {}

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  signup(user): boolean {
    this.loggedIn = true;
    let mockUser = {
      ...user,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    };

    localStorage.setItem('mockUser', JSON.stringify(mockUser));

    return true;
  }

  login(user): boolean {
    let mockUser: any = localStorage.getItem('mockUser');
    mockUser = mockUser ? JSON.parse(mockUser) : null;

    if (mockUser) {
      if (
        user.email === mockUser.email &&
        user.password === mockUser.password
      ) {
        this.loggedIn = true;
        return true;
      }
    }

    return false;
  }
}
