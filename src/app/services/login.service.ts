import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly API_URL = "http://localhost:8080";
  readonly ENDPOINT_LOGIN = "/Users/login";
  constructor(private http: HttpClient) {

  }
  login(formData:any){
    return this.http.post(this.API_URL+this.ENDPOINT_LOGIN,formData)
  }

}
