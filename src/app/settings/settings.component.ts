import { Component, Renderer2, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentUser;
  userTypeNum;
  userType;
  newEmail:string;
  phoneNumber:string;
  passwordInfo = {
    password: '',
    passwordRetyped: '',
  };
  

  @ViewChild('options') containerEltRef:ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.userTypeNum = localStorage.getItem('typeOfUser');
    if(this.userTypeNum == '1')
    {
      this.userType = 'Investor';
    }else{
      this.userType = 'Investee';
    }
    this.currentUser = user;
  }
  //for css design to show the user if account option or privacy option is clicked.
  optionEntered(choice:string){
    console.log(choice);
    let acc = this.containerEltRef.nativeElement.querySelector('#accountButton');
    let priv = this.containerEltRef.nativeElement.querySelector('#privacyButton');
    if(choice == 'account'){
      this.renderer.addClass(acc, 'newClass');
      this.renderer.removeClass(priv, 'newClass');
    }else{
      this.renderer.addClass(priv, 'newClass');
      this.renderer.removeClass(acc, 'newClass');
    }
  }

}
