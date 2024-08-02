import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../entity/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseurl="";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Student[]>{
    return this.http.get<Student[]>(this.baseurl);
  }
}
