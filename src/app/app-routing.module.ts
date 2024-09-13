import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/common/error/error.component';
import { ExpenseDetailsComponent } from './component/expense-details/expense-details.component';
import { ExpensesComponent } from './component/expenses/expenses.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AuthGuard } from './auth/service/route-guard.service';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "login", component: LoginComponent},
  { path: "logout", component: LogoutComponent, canActivate: [AuthGuard]},
  { path: "welcome/:name", component: WelcomeComponent, canActivate: [AuthGuard]},
  { path: "expenses", component: ExpensesComponent, canActivate: [AuthGuard]} ,
  { path: "expenses/:id", component: ExpenseDetailsComponent, canActivate: [AuthGuard]},
  
  { path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
