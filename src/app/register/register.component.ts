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
  currentState: boolean;
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
    private tokenService: Token,
    private router: Router,
    private token: Token) {}

  /*ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3CCDEA';//Setting background color of register page body.
 }*/
  ngOnInit() {
    this.currentState = false;
  }


  login(): void {
    if (parseInt(this.loginInformation.userType, 10) === 1 ) {
      this.investorService.login(this.loginInformation).subscribe(
        res => {
          this.setAuthData(res, '1');
          this.getInvestorData();
        },
        err => {
          console.log(err);
        }
      );
    } else if (parseInt(this.loginInformation.userType, 10) === 2) {
      this.investeeService.login(this.loginInformation).subscribe(
        (res) => {
          localStorage.setItem('typeOfUser', '2');
          this.setAuthData(res, '2');
          this.getInvesteeData();
        },
        (err) => {

        }
      );
    } else {
      console.log('Did not select user type');
    }
  }

  signup(): void {
    if (parseInt(this.signUpInformation.userType, 10) === 1) {
      this.investorService.signup(this.signUpInformation).subscribe(
        (res) => {
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
    } else if (parseInt(this.signUpInformation.userType, 10) === 2) {
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

  /**
   * Gets the investor data and sends them
   * to the feed page
   */
  getInvestorData(): void {
    this.investorService.getInvestorData().subscribe(
      (result) => {
        const user = result.result;
        this.investorService.setInvestor(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/feed']);
      },
      (error) => {

      }
    );
  }

  /**
   * Gets the investee data and sends them
   * to the feed page
   */
  getInvesteeData(): void {
    this.investeeService.getInvesteeData().subscribe(
      (res) => {
        const user = res.result;
        this.investeeService.setInvestee(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/feed']);
      }, (err) => {

      }
    );
  }

  /**
   * Sets the necessary auth data for the frontend
   * @param res token information
   * @param userType the type of user
   */
  private setAuthData(res, userType) {
    this.token.setToken(res.token);
    this.tokenService.setToken(res.token);
    const currentTime = new Date();
    this.expTime = new Date(currentTime.getTime() + res.expiresIn);
    this.saveAuthDataLocal(this.token.getToken(), this.expTime);
    localStorage.setItem('typeOfUser', userType);
  }

  /**
   * Saving the auth data to the local storage
   * @param token the token value
   * @param expirationDate when the token expires
   */
  private saveAuthDataLocal(token, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
  }

  private removeLocalAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
  }
}
