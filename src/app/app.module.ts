import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { FooterComponent } from './component/common/footer/footer.component';
import { MenuComponent } from './component/common/menu/menu.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ExpenseDetailsComponent } from './component/expense-details/expense-details.component';
import { ExpensesComponent } from './component/expenses/expenses.component';
import { MessageBannerComponent } from './component/common/message-banner/message-banner.component';
import { ErrorComponent } from './component/common/error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import HttpInterceptorAuthService from './auth/service/http-interceptor-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    ExpenseDetailsComponent,
    ExpensesComponent,
    MessageBannerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
