import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from 'src/app/user/user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit, OnDestroy {
  themes: Theme[] = [];
  private subscription = {} as Subscription;
  constructor(private api: ApiService, private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  isSubscribed(theme: Theme): boolean {
    const userId = this.userService.user?.id;
    const isSubscribed = theme.subscribers.find((id) => {
      return id === userId
    });
    return !!isSubscribed;
  }


  ngOnInit(): void {
    this.subscription = this.api.getThemes().subscribe(themes => {    
      this.themes = themes;      
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
