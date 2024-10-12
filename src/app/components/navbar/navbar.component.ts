import { AuthService } from './../../shared/services/auth.service';
import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  isloading:WritableSignal<boolean> = signal(false);
  ngOnInit() {
    this._AuthService.userInforamtion.subscribe((res)=>{
      if(res == null){
        this.isloading.set(false);
      }else{
        this.isloading.set(true);
      }
    })
  }
 
  onSignout(){
    window.localStorage.removeItem('userToken');
    this._AuthService.userInforamtion.next(null);
    this._Router.navigate(['/login']);
  }
}
