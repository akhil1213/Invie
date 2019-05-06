import { Component, OnInit, ElementRef } from '@angular/core';
import { InvestorService } from '../services/investor.service';
import { InvesteeService } from '../services/investee.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class RegisterComponent implements OnInit {
  // Necessary information for login
  loginInformation = {
    email: '',
    password: '',
    userType: ''
  };

  // Necessary information for signup
  signUpInformation = {
    name: '',
    email: '',
    password: '',
    passwordRetype: '',
    userType: ''
  };

  private token = 'blank';
  private expTime: Date = new Date();

  constructor(
    private investorService: InvestorService,
    private investeeService: InvesteeService,
    private router: Router) {}

  /*ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3CCDEA';//Setting background color of register page body.
 }*/
  ngOnInit() {
  }

  getToken() {
    return this.token;
  }

  login(): void {
    if (parseInt(this.loginInformation.userType) === 1 ) {
      this.investorService.login(this.loginInformation).subscribe(
        res => {
          console.log(res);
          this.token = res.token;
          const currentTime = new Date();
          this.expTime = new Date(currentTime.getTime() + res.expiresIn);
          this.saveAuthDataLocal(this.token, this.expTime);
          const user = JSON.parse(localStorage.getItem('user'));
          this.investeeService.setInvestee(user);
          localStorage.setItem('typeOfUser', '1');
          this.router.navigate(['/feed']);
        },
        err => {
          console.log(err);
        }
      );
    } else if (parseInt(this.loginInformation.userType) === 2) {
      this.investeeService.login(this.loginInformation).subscribe(
        (res) => {
          this.token = res.token;
          const currentTime = new Date();
          this.expTime = new Date(currentTime.getTime() + res.expiresIn);
          this.saveAuthDataLocal(this.token, this.expTime);
          const user = JSON.parse(localStorage.getItem('user'));
          this.investeeService.setInvestee(user);
          localStorage.setItem('typeOfUser', '2');
          this.router.navigate(['/feed']);
        },
        (err) => {

        }
      );
    } else {
      console.log('Did not select user type');
    }
  }

  signup(): void{
    if (parseInt(this.signUpInformation.userType) === 1){
      this.investorService.signup(this.signUpInformation).subscribe(
        (res) => {
          console.log('Investor signed up!');
          const user = res.result;
          this.loginInformation = {
            email: user.email,
            password: this.signUpInformation.password,
            userType: '1'
          };
          this.login();
        },
        (err) => {
          console.log(err);
        }

        );
    } else if (parseInt(this.signUpInformation.userType) === 2){
      this.investeeService.signup(this.signUpInformation).subscribe(
        (res) => {
          console.log('Investee signed up!');
          const user = res.result;
          this.loginInformation = {
            email: user.email,
            password: this.signUpInformation.password,
            userType: '2'
          };
          this.login();
        },
        (err) => {

        }
      );
    } else {
      console.log('Did not select user type');
    }
  }

  private saveAuthDataLocal(token, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
  }

  private removeLocalAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
  }
}
