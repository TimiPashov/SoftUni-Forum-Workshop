import { Injectable } from '@angular/core';
import { AuthUser, User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: AuthUser | undefined;
  USER_KEY = 'user';


  get isLoggedIn(): boolean {
    return !!this.user
  }

  constructor(private http: HttpClient) {
    try {
      const storageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(storageUser)

    } catch (error) {
      this.user = undefined;
    }
  }
  apiUrl = environment.apiUrl;


  login(email: string, password: string) {

    
      return this.http.post<User>(`${this.apiUrl}/login`, { email, password }).subscribe((u) => {
        this.user = {
          firstName: u.username,
          email: u.email,
          phoneNumber: u.tel,
          id: u._id
        }
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
      });

    // this.user = {
    //   firstName: 'Timi',
    //   email: 'timi@abv.bg',
    //   phoneNumber: '123-123-123',
    //   password: '123',
    //   id: '5fa64a072183ce1728ff3719'
    // }
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
