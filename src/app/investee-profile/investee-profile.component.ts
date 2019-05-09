import { Component, OnInit } from '@angular/core';
import { BusinessIdea } from '../models/BusinessIdea';
import { InvesteeService } from '../services/investee.service';

@Component({
  selector: 'app-investee-profile',
  templateUrl: './investee-profile.component.html',
  styleUrls: ['./investee-profile.component.css']
})
export class InvesteeProfileComponent implements OnInit {

  hasIdea: boolean;
  displayModal: boolean;
  editModal: boolean;
  currentUser;
  businessIdea: BusinessIdea;
  owner: string;
  tags: string;
  constructor(private investeeService: InvesteeService) {
    this.hasIdea = false;
    this.displayModal = false;
    this.editModal = false;
    this.businessIdea = {
      _id: '',
      userId: '',
      name: '',
      objective: '',
      description: '',
      webLink: '',
      tags: [],
      owners: [],
      typeOfBusiness: '',
      phoneNumbers: '',
      views: ''
    };
    this.owner = '';
    this.tags = '';
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.investeeService.setInvestee(user);
    console.log(this.investeeService.getInvestee());
    this.currentUser = user;
  }

  showModal(): void {
    this.displayModal = !this.displayModal;
  }

  showEditModal(): void {
    this.editModal = !this.editModal;
  }

  updateProfile(): void {
    const requiredInformation = {
      name: this.currentUser.name,
      phoneNumber: this.currentUser.phoneNumber,
      description: this.currentUser.description
    };
    this.investeeService.updateInvestee(requiredInformation).subscribe(
      (res) => {
        console.log(res);
        const user = this.investeeService.getInvestee();
        user.name = res.result.name;
        user.description = res.result.description;
        user.phoneNumber = res.result.phoneNumber;
        this.investeeService.setInvestee(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.showEditModal();

      }, (err) => {
        const user = this.investeeService.getInvestee();
        this.currentUser = user;
        this.showEditModal();
        console.log(err);
      }
    );
  }

  createBusinessIdea(): void {
    console.log(this.businessIdea);
    const tags = this.tags.split(' ');
    this.businessIdea.owners.push(this.owner);
    this.businessIdea.tags = tags;
    console.log(this.businessIdea);
  }
}
