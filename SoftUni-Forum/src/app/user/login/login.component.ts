import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private userService: UserService, private router: Router) { }

  login(form: NgForm) {
    if(!form){
      return;
    }
   
    if(form.invalid){
      console.log('Form is invalid');
      return;
    }
    
    // console.log(form.value)
    this.userService.login(form.value.email, form.value.password);
    form.reset();
    this.router.navigate(['/home']);

  }
}
