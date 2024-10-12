import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Enviroment } from '../base/enviroment/enviroment';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInforamtion:BehaviorSubject<any> = new  BehaviorSubject(null);
  constructor(private _http:HttpClient){
    afterNextRender(()=>{
      if(window.localStorage.getItem('userToken') !== null){
        this.userDataDecoded();
      }
    })
  }
  signup(data:any):Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/users/signUp`,data);
  }
  signin(data:any):Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/users/signIn`,data);
  }
  userDataDecoded(){
    const token = JSON.stringify(window.localStorage.getItem('userToken'));
    const decoded = jwtDecode(token);
    this.userInforamtion.next(decoded);
  }
}
