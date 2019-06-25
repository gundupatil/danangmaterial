import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router
){

  }

  gotToLogin(){
    this.router.navigate(['/login']);
  }


}
