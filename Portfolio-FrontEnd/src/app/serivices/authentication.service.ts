import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url=""
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  LogIn(credentials:any): Observable<any> {
    return this.http.post(this.url, credentials).pipe(map(data=>{
      sessionStorage.setItem('currentUsert', JSON.stringify(data));     
      this.currentUserSubject.next(data)
      return data;
    }))
  }

  get AuthenticatedUser(){
    return this.currentUserSubject.value;
  }
}
