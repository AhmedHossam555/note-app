import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isloading:WritableSignal<boolean> = signal(false);
  errMsg:WritableSignal<string> = signal('');
  
  private readonly _Auth = inject(AuthService);
  private _Router = inject(Router);
  signupForm = new FormGroup({
    name: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^\w{6,}$/)]),
    age: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  })
  onSubmit(){
    this.isloading.set(true)
    console.log(this.signupForm.value);
    this._Auth.signup(this.signupForm.value).subscribe({
      next:(res)=>{
        if(res.msg === "done"){
          this.isloading.set(false);
          this.signupForm.reset();
          setTimeout(()=>{
            this._Router.navigate(['/login']);
          },1500)
        }
      },
      error:(err)=>{
        this.isloading.set(false);
        this.errMsg.set(err.error.msg)
        console.log(err)
      }
    })
  }

}
