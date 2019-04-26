import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from "./auth.service"
import { InvestorService } from '../services/investor.service';
import { InvesteeService } from '../services/investee.service';
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
  }

  constructor(private authService: AuthService,
    private investorService: InvestorService,
    private investeeService: InvesteeService){ }

  /*ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3CCDEA';//Setting background color of register page body.
 }*/
  ngOnInit() {
  }

  login(): void {
    console.log(this.loginInformation);
    if (this.loginInformation.userType === '1' ){
      this.investorService.login(this.loginInformation);
    } else if (this.loginInformation.userType === '2'){
      this.investeeService.login(this.loginInformation);
    } else {
      console.log('Did not select user type')
    }
  }

  signup(): void{
    console.log(this.signUpInformation);
    if (this.signUpInformation.userType === '1' ){
      this.investorService.signup(this.signUpInformation);
    } else if (this.signUpInformation.userType === '2'){
      this.investeeService.signup(this.signUpInformation);
    } else {
      console.log('Did not select user type')
    }
  }
 /* accountMade(){
    if(this.email != "" && this.password1.valueOf() == this.password2.valueOf() && this.password1 != ""){
      this.authService.createUser(this.email,this.password1,this.userType);
    }
  }*/


}
