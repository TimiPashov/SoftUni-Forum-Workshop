import { Injectable } from '@angular/core';
import { AuthUser } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: AuthUser | undefined;
  USER_KEY = 'user';


  get isLoggedIn(): boolean {
    return !!this.user
  }

  constructor() {
    try {
      const storageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(storageUser)

    } catch (error) {
      this.user = undefined;
    }
  }


  login() {
    this.user = {
      firstName: 'Timi',
      email: 'timi@abv.bg',
      phoneNumber: '123-123-123',
      password: '123',
      id: '5fa64a072183ce1728ff3719'
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
