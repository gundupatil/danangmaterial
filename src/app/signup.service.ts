import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http/src/response';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs';

@Injectable()
export class SignUpService {
  
  isDev:boolean;

  response = { success: true, user: 'Dan Patil' };

  constructor(private http: HttpClient) { 
    this.isDev = true; // Change to false before deployment
  }

  signup(body){
    // Setting Headers
    // console.log(body);
    // let headers = new HttpHeaders();
    // // headers.append('Content-Type','application/json');
    // let ep = this.prepEndpoint('login');
    // console.log(ep);
    // console.log('doing a post request to:  ' + ep);
    // return this.http.post(ep, body, {headers:headers})
    // .toPromise();
    return of(this.response).toPromise();
  }

  prepEndpoint(ep){
    if(this.isDev){
      return ''+ep;////localhost:4192/api/v1/
    } else {
      return ep;
    }
  }

}