import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import {  ViewChild } from '@angular/core'
import { Sidebar } from 'primeng/sidebar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'posbackoffice';
  users!: any; // Utilise le type User pour déclarer la propriété users
  
  

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('on init.....');
    this.userService.getUsers().subscribe(
      (res)=>{
        console.log(res);
        this.users = res;
      } ,
      (err)=>console.log(err)
        
      
    )
  }
}
