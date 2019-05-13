import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Investor } from '../models/Investor';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  user: Investor;
  constructor(private http: HttpClient) {
    this.user = null;
  }

  signup(user): Observable<any> {
    return this.http.post<any>('//localhost:3000/user/investor/signup', user);
  }

  login(user): Observable<any> {
    return this.http.post<any>('//localhost:3000/user/investor/login', user);
  }
  
  updateInvestor(investor): Observable<any> {
    return this.http.patch<any>('//localhost:3000/user/investor/updateDesc', investor);
  }
  getInvestorData(): Observable<any> {
    return this.http.get<any>('//localhost:3000/user/investor/getInvestor');
  }

  setInvestor(investor): void {
    this.user = investor;
  }

  getInvestor(): Investor {
    return this.user;
  }
}
