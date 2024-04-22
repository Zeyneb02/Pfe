import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormGroup=new FormGroup( {
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])

  })

  constructor(private _router : Router,private _loginService: LoginService){}

  onLogin(){
    this._loginService.login(this.loginFormGroup.value).subscribe(
      (res)=>{
        console.log(res);
        this._router.navigate(['/template'])
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }
}
