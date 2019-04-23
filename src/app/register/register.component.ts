import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showNew: boolean = false;
  wrongPassword:boolean = false;
  investeeId:number;
  investorId:number;
  username:string;
  password:string;
  password1:string;
  password2:string;
  userType:string;
  email:string;
  phone:string;
  constructor() { }

  ngOnInit() {
  }
  accountMade(){
    if(this.password1.valueOf() == this.password2.valueOf()){
      if(this.userType.valueOf() == "Investee"){
        const Investee = {//How do I save this to the mongoDB collection?
          username: this.username,
          password: this.password1,
          email:this.email,
          phoneNumber:this.phone
        }
      }else{
        const Investor = {
          username: this.username,
          password: this.password1,
          email:this.email,
          phoneNumber:this.phone
        }
      }
    }else{
        this.wrongPassword = true;
    }
  }

}