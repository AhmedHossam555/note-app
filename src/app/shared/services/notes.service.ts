import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../base/enviroment/enviroment';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http:HttpClient) { }
  addNote(data:object):Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/notes`,data,{
      headers:{
        token: '3b8ny__' + window.localStorage.getItem('userToken')
      }
    })
  }
  getUserNotes():Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/notes`,{
      headers:{
        token: '3b8ny__' + window.localStorage.getItem('userToken')
      }
    })
  }
  updateNote(id:string, data:object):Observable<any>{
    return this._http.put(`${Enviroment.baseUrl}/notes/${id}`,data,
      {
        headers:{
        token: '3b8ny__' + window.localStorage.getItem('userToken')
      }}
    )
  }
  deleteNote(id:string):Observable<any>{
    return this._http.delete(`${Enviroment.baseUrl}/notes/${id}`,{
      headers: {
        token: '3b8ny__' + window.localStorage.getItem('userToken')
      }
    })
  }
}
