import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  typeOfUser: number;
  constructor() { }

  ngOnInit() {
    this.typeOfUser = parseInt(localStorage.getItem('typeOfUser'));
    // Investor Data
    if (this.typeOfUser === 1) {

    } else {
      // Ivestee Data
    }
  }

}
