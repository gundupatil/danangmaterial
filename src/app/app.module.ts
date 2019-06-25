import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


import { ReactiveFormsModule } from '@angular/forms';
import { LogSignUpComponent } from './log-sign-up/log-sign-up.component';

import {LoginService} from './login.service';
import {SignUpService} from './signup.service';
import { CONST_ROUTING } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    MaterialModule, 
    ReactiveFormsModule,
    CONST_ROUTING
    ],
  declarations: [ AppComponent, HelloComponent, LogSignUpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
