import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Investee } from '../models/Investee';

@Injectable({
  providedIn: 'root'
})
export class InvesteeService {

  user: Investee;
  constructor(private http: HttpClient) { 
    this.user = null;
  }

  signup(user): Observable<any> {
    return this.http.post<any>('//localhost:3000/user/investee/signup', user);
  }

  login(user): Observable<any> {
    return this.http.post<any>('//localhost:3000/user/investee/login', user);
  }

  setInvestee(investee): void {
    this.user = investee;
  }

  getInvestee(): Investee {
    return this.user;
  }
}
