import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvesteeService {

  constructor(private http: HttpClient) { }

  signup(user): Observable<any> {
    return this.http.post<any>('//localhost:3000/user/investor/signup', user);
  }

  login(user): Observable<any> {
    return this.http.post<any>('//localhost:3000/user/investor/login', user);
  }
}
