import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  responseSuccess = false;

  constructor() { }

  ngOnInit() {
  }

  forgotEmailSubmit(vl){
    console.log(vl);
    this.responseSuccess =true ;
  }

  resetSubmit(f){
    console.log(f);
    
  }
}