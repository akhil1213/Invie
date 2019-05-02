import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investee-profile',
  templateUrl: './investee-profile.component.html',
  styleUrls: ['./investee-profile.component.css']
})
export class InvesteeProfileComponent implements OnInit {

  hasIdea: boolean;
  displayModal: boolean;
  constructor() {
    this.hasIdea = false;
    this.displayModal = false;
  }

  ngOnInit() {
  }

  showModal(): void {
    this.displayModal = !this.displayModal;
  }

}
