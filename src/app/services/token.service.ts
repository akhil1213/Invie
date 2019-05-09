import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class Token {

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    if (!this.token) {
      this.setToken('blank');
    }
  }
  private token = 'blank';

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
