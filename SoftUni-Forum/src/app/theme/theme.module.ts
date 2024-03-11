import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { MainComponent } from './main/main.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';



@NgModule({
  declarations: [
    CurrentThemeComponent,
    AddThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }