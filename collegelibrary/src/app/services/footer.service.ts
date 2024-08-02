import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Footer } from '../models/footer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private baseurl="";

  constructor(private http:HttpClient) { }
  onsubmit():Observable<Footer[]>{
    return this.http.get<Footer[]>(this.baseurl);
  }
}
