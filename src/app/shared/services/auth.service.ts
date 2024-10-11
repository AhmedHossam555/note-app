import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../base/enviroment/enviroment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http:HttpClient){

  }
  signup(data:any):Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/users/signUp`,data)
  }
}
