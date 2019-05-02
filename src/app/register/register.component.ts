import { Component, OnInit, ElementRef } from '@angular/core';
import { InvestorService } from '../services/investor.service';
import { InvesteeService } from '../services/investee.service';
import { Injectable } from '@angular/core';
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
  }

  private token = 'blank';
  private expTime: Date = new Date();

  constructor(
    private investorService: InvestorService,
    private investeeService: InvesteeService) {}

  /*ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3CCDEA';//Setting background color of register page body.
 }*/
  ngOnInit() {
  }

  getToken() {
    return this.token;
  }

  login(): void {
    if (parseInt(this.loginInformation.userType) === 1 ){
      this.investorService.login(this.loginInformation).subscribe(
        res => {
          console.log(res);
          this.token = res.token;
          const currentTime = new Date();
          this.expTime = new Date(currentTime.getTime() + res.expiresIn);
          this.saveAuthDataLocal(this.token, this.expTime);
        },
        err => {console.log(err)}
      );
    } else if (parseInt(this.loginInformation.userType) === 2){
      this.investeeService.login(this.loginInformation).subscribe(
        (res) => {

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
          console.log(res);
        },
        (err) => {
          console.log(err);
        }

        );
    } else if (parseInt(this.signUpInformation.userType) === 2){
      this.investeeService.signup(this.signUpInformation).subscribe(
        (res) => {
          console.log(res);
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
 /* accountMade(){
    if(this.email != "" && this.password1.valueOf() == this.password2.valueOf() && this.password1 != ""){
      this.authService.createUser(this.email,this.password1,this.userType);
    }
  }*/


}
