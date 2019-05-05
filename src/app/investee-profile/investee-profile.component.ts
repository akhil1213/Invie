import { Component, OnInit } from '@angular/core';
import { BusinessIdea } from '../models/BusinessIdea';

@Component({
  selector: 'app-investee-profile',
  templateUrl: './investee-profile.component.html',
  styleUrls: ['./investee-profile.component.css']
})
export class InvesteeProfileComponent implements OnInit {

  hasIdea: boolean;
  displayModal: boolean;
  businessIdea: BusinessIdea;
  owner: string;
  tags: string;
  constructor() {
    this.hasIdea = true;
    this.displayModal = false;
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
  }

  showModal(): void {
    this.displayModal = !this.displayModal;
  }

  createBusinessIdea(): void {
    console.log(this.businessIdea);
    const tags = this.tags.split(' ');
    this.businessIdea.owners.push(this.owner);
    this.businessIdea.tags = tags;
    console.log(this.businessIdea);
  }
}
