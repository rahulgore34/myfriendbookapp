import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ILoginModel } from './loginmodel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormModel: ILoginModel = {};
  constructor() { }

  ngOnInit(): void {
    this.loginFormModel = {
      email: '',
      mobile: ''
    }
  }


  onSubmit(form: NgForm) {
    console.log(form.value);
    if(form.value.umobile && !form.value.email) {
      console.log('oTP validation')
    } else if(!form.value.umobile && form.value.email) {
      console.log('email validationb')
    } else {
      console.log('both validationb')
    }

  }

}
