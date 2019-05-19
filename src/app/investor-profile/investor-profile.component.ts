import { Component, OnInit } from '@angular/core';
import { Investor } from '../models/Investor';
import { InvestorService } from '../services/investor.service';


@Component({
  selector: 'app-investor-profile',
  templateUrl: './investor-profile.component.html',
  styleUrls: ['./investor-profile.component.css']
})
export class InvestorProfileComponent implements OnInit {
  currentUser;
  interestString: string;
  editModal: boolean;

  constructor(private investorService: InvestorService) { }

  ngOnInit() {
    this.editModal = false;
    this.interestString = '';
    const user = JSON.parse(localStorage.getItem('user'));
    this.investorService.setInvestor(user);
    this.currentUser = user;
  }

  showEditModal(): void {
    this.editModal = !this.editModal;
  }
  updateProfile() {
    const interests = this.interestString.split(' ');
    console.log(interests);
    this.currentUser.interest = interests;
    // Frontend needs to pass in: name, phoneNumber, description. weblink, currentCompany, interest.
    const requiredInformation = {
      name: this.currentUser.name,
      phoneNumber: this.currentUser.phoneNumber,
      description: this.currentUser.description,
      weblink: this.currentUser.weblink,
      currentCompany: this.currentUser.currentCompany,
      interest: this.currentUser.interest
    };
    this.investorService.updateInvestor(requiredInformation).subscribe(
      (res) => {
        console.log(res);
        const user = this.investorService.getInvestor();
        user.name = res.result.name;
        user.description = res.result.description;
        user.phoneNumber = res.result.phoneNumber;
        user.interests = interests;
        this.investorService.setInvestor(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser = user;
        this.interestString = '';
        this.showEditModal();

      }, (err) => {
        const user = this.investorService.getInvestor();
        this.currentUser = user;
        this.interestString = '';
        this.showEditModal();
        console.log(err);
      }
    );
  }


}
