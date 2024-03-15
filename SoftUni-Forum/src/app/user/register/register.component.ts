import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isRepassValid: boolean = false;

  register(form: NgForm) {
    if (!form) {
      return;
    }

    if (form.invalid) {
      console.log('Form is Invalid');
      return;
    }


    if (form.value.password === form.value.rePassword) {

      this.isRepassValid = true

    } else {

      return
    }


    console.log(form.value);
    form.reset();
  }

}
