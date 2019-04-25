import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from "./auth.service"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  showNew: boolean = false;
  wrongPassword:boolean = false;
  name:string;
  investeeId:number;
  investorId:number;
  username:string;
  password:string;
  password1:string;
  password2:string;
  userType:string;
  email:string;
  phone:string;

  constructor(private authService : AuthService){ }

  /*ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3CCDEA';//Setting background color of register page body.
 }*/
  ngOnInit() {
  }

  accountMade(){
    if(this.email != "" && this.password1.valueOf() == this.password2.valueOf() && this.password1 != ""){
      this.authService.createUser(this.email,this.password1,this.userType);
    }
  }

}
