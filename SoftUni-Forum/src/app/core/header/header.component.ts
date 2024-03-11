import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get fisrtName():string {
    return this.userService.user?.firstName || '';
  }

  logout(){
    this.userService.logout()
  }
}
