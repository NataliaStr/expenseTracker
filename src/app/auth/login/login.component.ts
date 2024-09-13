import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username =''
  password = ''
  invalidLogin = false

  constructor(private router: Router, private authService: AuthService){}

  handleLogin(){
    this.authService.authorize(this.username, this.password)
    this.router.navigate(['welcome', this.username])
    this.invalidLogin = false
  }
}
