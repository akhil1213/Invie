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
  businessIdea;
  owner: string;
  tags: string;
  constructor(private investeeService: InvesteeService) {
    this.hasIdea = false;
    this.displayModal = false;
    this.editModal = false;
    this.businessIdea = {
      name: '',
      objective: '',
      description: '',
      webink: '',
      tags: [],
      owners: [],
      typeOfBusiness: '',
    };
    this.owner = '';
    this.tags = '';
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.investeeService.setInvestee(user);
    this.currentUser = user;
    this.investeeService.getIdeaData().subscribe(
      (data) => {
        console.log(data.result);
        this.hasIdea = true;
        this.businessIdea = data.result;
      },
      (error) => {
        console.log('Investee does not have an idea');
        console.log(error);
      }
    );
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
        user.name = requiredInformation.name;
        user.description = requiredInformation.description;
        user.phoneNumber = requiredInformation.phoneNumber;
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
    const tags = this.tags.split(' ');
    this.businessIdea.owners.push(this.owner);
    this.businessIdea.tags = tags;
    this.investeeService.createIdea().subscribe(
      (ideaCreated) => {
        this.investeeService.updateIdea(this.businessIdea).subscribe(
          (updatedIdea) => {
            console.log('Idea has been created');
            this.hasIdea = !this.hasIdea;
            this.investeeService.setIdea(this.businessIdea);
            this.showModal();
          }
        );
      }
    );
  }
}
