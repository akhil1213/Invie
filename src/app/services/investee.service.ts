import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Investee } from '../models/Investee';

@Injectable({
  providedIn: 'root'
})
export class InvesteeService {

  user: Investee;
  businessIdea;
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

  createIdea(): Observable<any> {
    return this.http.post<any>('//localhost:3000/user/investee/createIdea', {});
  }

  updateIdea(business): Observable<any> {
    return this.http.patch<any>('//localhost:3000/user/investee/updateIdea', business);
  }

  getIdeaData(): Observable<any> {
    return this.http.get<any>('//localhost:3000/user/investee/getIdea');
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

  setIdea(idea): void {
    this.businessIdea = idea;
  }

  getIdea() {
    return this.businessIdea;
  }
}
