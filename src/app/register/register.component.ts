import { Component, OnInit, ElementRef } from '@angular/core';
import { InvestorService } from '../services/investor.service';
import { InvesteeService } from '../services/investee.service';
import { Token } from '../services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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

  private expTime: Date = new Date();
  private currentUser = null;

  constructor(
    private investorService: InvestorService,
    private investeeService: InvesteeService,
    private router: Router,
    private token: Token) {}

  /*ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3CCDEA';//Setting background color of register page body.
 }*/
  ngOnInit() {
  }


  login(): void {
    if (parseInt(this.loginInformation.userType) === 1 ) {
      this.investorService.login(this.loginInformation).subscribe(
        res => {
          console.log(res);
          this.token.setToken(res.token);
          const currentTime = new Date();
          this.expTime = new Date(currentTime.getTime() + res.expiresIn);
          this.saveAuthDataLocal(this.token.getToken(), this.expTime);
          // const user = JSON.parse(localStorage.getItem('user'));
          // this.investeeService.setInvestee(user);
          localStorage.setItem('typeOfUser', '1');
          this.getInvestorData();
          //this.router.navigate(['/feed']);
        },
        err => {
          console.log(err);
        }
      );
    } else if (parseInt(this.loginInformation.userType) === 2) {
      this.investeeService.login(this.loginInformation).subscribe(
        (res) => {
          this.token.setToken(res.token);
          const currentTime = new Date();
          this.expTime = new Date(currentTime.getTime() + res.expiresIn);
          this.saveAuthDataLocal(this.token.getToken(), this.expTime);
          const user = JSON.parse(localStorage.getItem('user'));
          this.investeeService.setInvestee(user);
          localStorage.setItem('typeOfUser', '2');
         // this.router.navigate(['/feed']);
        },
        (err) => {

        }
      );
    } else {
      console.log('Did not select user type');
    }
  }

  signup(): void {
    if (parseInt(this.signUpInformation.userType) === 1){
      this.investorService.signup(this.signUpInformation).subscribe(
        (res) => {
          const user = res.result;
          this.loginInformation = {
            email: user.email,
            password: this.signUpInformation.password,
            userType: '1'
          };
          //this.login();
        },
        (err) => {
          console.log(err);
        }

        );
    } else if (parseInt(this.signUpInformation.userType) === 2){
      this.investeeService.signup(this.signUpInformation).subscribe(
        (res) => {
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

  getInvestorData(): void {
    this.investorService.getInvestorData().subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {

      }
    );
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
