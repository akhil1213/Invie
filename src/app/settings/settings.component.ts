import { Component, Renderer2, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  newEmail:string;
  phoneNumber:string;
  passwordInfo = {
    password: '',
    passwordRetyped: '',
  };
  

  @ViewChild('options') containerEltRef:ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
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
