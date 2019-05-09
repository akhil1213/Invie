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

  getInvesteeData(): Observable<any> {
    return this.http.get<any>('//localhost:3000/user/investee/getInvestee');
  }

  updateInvestee(investee): Observable<any> {
    return this.http.patch<any>('//localhost:3000/user/investee/updateDesc', investee);
  }

  displayFeed():  Observable<any> {
    return this.http.get<any>('//localhost:3000/user/investee/generateFeed');
  }
  setInvestee(investee): void {
    this.user = investee;
  }

  getInvestee(): Investee {
    return this.user;
  }
}
