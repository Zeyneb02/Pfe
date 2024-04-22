import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = []; // Déclaration et initialisation de la variable users

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    /*console.log("oninitusers")
    this.userService.getUsers().subscribe(
      (res) => {
        console.log(res);
        this.users = res; // Attribution des données récupérées à la variable users
        console.log("users")
        console.log(this.users)
      }, 
      (err) => {
        console.log(err);
      }
    )*/
  }
}
