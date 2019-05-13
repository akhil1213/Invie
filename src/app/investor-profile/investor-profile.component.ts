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
  editModal: boolean;

  constructor(private investorService: InvestorService) { }

  ngOnInit() {
    this.editModal = false;
    const user = JSON.parse(localStorage.getItem('user'));
    this.investorService.setInvestor(user);
    this.currentUser = user;
  }

  showEditModal(): void {
    this.editModal = !this.editModal;
  }
  updateProfile(){
    //Frontend needs to pass in: name, phoneNumber, description. weblink, currentCompany, interest.
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
        this.investorService.setInvestor(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.showEditModal();

      }, (err) => {
        const user = this.investorService.getInvestor();
        this.currentUser = user;
        this.showEditModal();
        console.log(err);
      }
    );
  }


}
