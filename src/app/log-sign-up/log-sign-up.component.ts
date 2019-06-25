import { Component } from '@angular/core';
import {LoginService} from '../login.service';
import {SignUpService} from '../signup.service';


@Component({
  selector: 'app-log-sign-up',
  templateUrl: './log-sign-up.component.html',
  styleUrls: ['./log-sign-up.component.css']
})
export class LogSignUpComponent{

 loginFailure :true;
signupFailure:true;

showSignUpPage = false;

LoginEmail;
LoginPassword;

FullName;
RegEmail;
Mobile;
Password;
ConfirmPassword;

 birthday = new Date(1988, 3, 15); // April 15, 1988
 
  constructor(private loginService:LoginService, private signUpService:SignUpService){

  }

  openSignUpPage(){
    this.showSignUpPage = true;
  }
  

  showLogin(){
    this.showSignUpPage = false;
  }

  loginSubmit(f){
    console.log(f);
    // this.loginFailure = false;
    let loginModel = {
      email:f.email,
      password:f.password
    }

    this.loginService.login(loginModel).then(res=>{
      console.log(res);
      if(res['success']){
        this.loginFailure = true;
      }
      else{
        this.loginFailure = false;
      }

    }).catch(err=>{
      console.log(err)
    })
  }


  regSubmit(r){
    console.log(r);
    // this.signupFailure = false;

    let signUpModel = {
      email:this.RegEmail,
      password:this.Password,
      fullName:this.FullName,
      mobile:this.Mobile
    }

    this.signUpService.signup(signUpModel).then(res=>{
      console.log(res);
      if(res['success']){
          this.signupFailure = true;
      }
      else{
        this.signupFailure = false;
      }
    }).catch(err=>{
      console.log(err);
    })
    
  }
}
