import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _Auth = inject(AuthService);
  signupForm = new FormGroup({
    name: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^\w{6,}$/)]),
    age: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  })
  onSubmit(){
    console.log(this.signupForm.value);
    this._Auth.signup(this.signupForm.value).subscribe({
      next:(res)=>{
        if(res.msg === "done"){
          window.localStorage.setItem('userToken', res.user.password)
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
