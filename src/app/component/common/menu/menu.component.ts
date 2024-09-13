import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { appProperties } from 'src/app/app-msgs.config'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  appName = appProperties.app_name
  welcome = appProperties.en_welcome
  expenses = appProperties.en_expenses
  login = appProperties.en_login
  logout = appProperties.en_logout

  constructor(protected authService: AuthService){}
}
