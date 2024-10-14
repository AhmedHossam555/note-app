import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { logoutGuard } from './shared/guards/logout.guard';

export const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'home',loadComponent:()=>import('../app/components/home/home.component').then((c)=>c.HomeComponent), canActivate:[authGuard],title:'home'},
    {path:'login',loadComponent:()=>import('../app/auth/login/login.component').then((c)=>c.LoginComponent), canActivate:[logoutGuard], title:'login'},
    {path:'register',loadComponent:()=>import('../app/auth/register/register.component').then((c)=>c.RegisterComponent),canActivate:[logoutGuard], title:'register'},
    {path:'**',loadComponent:()=>import('../app/components/notfound/notfound.component').then((c)=>c.NotfoundComponent),title: 'notfound'}
];
