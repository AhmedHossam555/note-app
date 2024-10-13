import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { logoutGuard } from './shared/guards/logout.guard';

export const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'home',component:HomeComponent, canActivate:[authGuard],title:'home'},
    {path:'login',component:LoginComponent, canActivate:[logoutGuard], title:'login'},
    {path:'register',component:RegisterComponent,canActivate:[logoutGuard], title:'register'},
    {path:'**', component:NotfoundComponent}
];
