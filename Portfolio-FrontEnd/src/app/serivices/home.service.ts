import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PulledApart } from '../components/home/pulled-apart/pulled-apart';
import { Slot } from '../components/home/pulled-apart/slot/slot';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = "";

  constructor(private http:HttpClient) { }

  getPulledAparts(): Observable<any>{
    return this.http.get(this.url)
  }

  createPulledApart(pulledApart: PulledApart): Observable<any>{
    return this.http.post(this.url + "create/pulled-apart", pulledApart);
  }

  createSlot(slot: Slot): Observable<any>{
    return this.http.post(this.url + "create/slot", slot);
  }

  deletePulledApart(pulledApart: PulledApart): Observable<any>{
    return this.http.delete(this.url + "delete/pulled-apart/" + pulledApart)
  }

  deleteSlot(slot: Slot): Observable<any>{
    return this.http.delete(this.url + "delete/slot/" + slot);
  }
}
