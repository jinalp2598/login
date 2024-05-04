import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'dashboard' , component:DashboardComponent, canActivate:[authGuard]},
  {path:'' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
