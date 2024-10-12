import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isloading:WritableSignal<boolean> = signal(false);
  errMsg:WritableSignal<string> = signal('');
  private readonly _Auth = inject(AuthService);
  private readonly _Router = inject(Router);
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^\w{6,}$/)]),
  })
  onSubmit(){
    this.isloading.set(true)
    this._Auth.signin(this.loginForm.value).subscribe({
      next:(res)=>{
        if(res.msg === "done"){
          this.isloading.set(false);
          this.loginForm.reset();
          window.localStorage.setItem('userToken',res.token);
          this._Auth.userDataDecoded();
          this._Router.navigate(['/home']);
        }
      },
      error:(err)=>{
        this.errMsg.set(err.error.msg)
        this.isloading.set(false);
      }
    })
  }
}
