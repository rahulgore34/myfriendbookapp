import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { ILoginModel } from './loginmodel';
import {LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormModel: ILoginModel = {};
  statusMessage = '';
  otpField = '';
  loginuseremail = '';
  checkEmailExistInSys = true;
  constructor(private httpService: HttpService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginFormModel = {
      name: '',
      email: '',
      mobile: ''
    }
  }
  
  onSubmit(form: NgForm) {
    let loginmethod = '';
    let loginmethodvalue = '';
    let loginusername = form.value.name;
    if (form.value.umobile && !form.value.email) {
      console.log('OTP validation')
      loginmethod = 'mobile';
      loginmethodvalue = form.value.umobile;
    } else if (!form.value.umobile && form.value.email) {
      console.log('email validationb');
      loginmethod = 'email';
      loginmethodvalue = form.value.email;
      this.loginuseremail = loginmethodvalue;
    } else {
      console.log('both validationb');
      loginmethod = 'both';
      loginmethodvalue = form.value.email;
    }

    const reqObj = {
      loginmethod,
      loginmethodvalue : this.loginuseremail,
      loginusername
    }

    this.httpService.postData(reqObj, 'validateloginuser').subscribe((result: any) => {
      console.log(result);
      if (result && result.message) {
        this.statusMessage = result.message;
      }
    })

  }

  verifyOtp(otp: any) {
    if (otp) {
      this.httpService.postData({ otp, loginUsername: this.loginuseremail }, 'verifyotp').subscribe((res: any) => {
        console.log(res);
        if(res && res['message'] === 'success') {
          this.loginService.setLogUser(this.loginuseremail);
          this.router.navigate(['/myfriends']);
        }
      })
    }
  }

  onVerifySubmit(form: NgForm) {
    if (form.value && form.value.otp) {
      this.verifyOtp(form.value.otp);
    }
  }
}
