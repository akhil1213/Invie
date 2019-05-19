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
    return this.http.post<any>('http://invie.us-east-2.elasticbeanstalk.com/user/investor/signup', user);
  }

  login(user): Observable<any> {
    return this.http.post<any>('http://invie.us-east-2.elasticbeanstalk.com/user/investor/login', user);
  }

  updateInvestor(investor): Observable<any> {
    return this.http.patch<any>('http://invie.us-east-2.elasticbeanstalk.com/user/investor/updateDesc', investor);
  }

  getInvestorData(): Observable<any> {
    return this.http.get<any>('http://invie.us-east-2.elasticbeanstalk.com/user/investor/getInvestor');
  }

  displayFeed(): Observable<any> {
    return this.http.get<any>('http://invie.us-east-2.elasticbeanstalk.com/user/investor/generateFeed');
  }

  setInvestor(investor): void {
    this.user = investor;
  }

  getInvestor(): Investor {
    return this.user;
  }
}
