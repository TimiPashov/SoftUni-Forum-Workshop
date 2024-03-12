import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    WelcomeMsgComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserModule
  ],
  exports: [WelcomeMsgComponent]
})
export class SharedModule { }
