import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API_URL = "http://localhost:8080";
  readonly ENDPOINT_USERS = "/User/all";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<User[]>(this.API_URL + this.ENDPOINT_USERS);
  }

  
}
