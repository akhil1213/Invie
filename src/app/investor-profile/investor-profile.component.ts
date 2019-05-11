import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investor-profile',
  templateUrl: './investor-profile.component.html',
  styleUrls: ['./investor-profile.component.css']
})
export class InvestorProfileComponent implements OnInit {

  editModal: boolean;

  constructor() { }

  ngOnInit() {
    this.editModal = false;
  }

  showEditModal(): void {
    this.editModal = !this.editModal;
  }


}
