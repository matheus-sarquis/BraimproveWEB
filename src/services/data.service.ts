import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { }

  public getScore(): Observable<any> {
    //headers = headers.set('token', token);
    return this.http.get( '/api/score')
  }
}
