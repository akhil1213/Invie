import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../services/investor.service';
import { InvesteeService } from '../services/investee.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  typeOfUser: number;
  feedData;
  constructor(private investorService: InvestorService,
    private investeeService: InvesteeService) { }

  ngOnInit() {
    this.typeOfUser = parseInt(localStorage.getItem('typeOfUser'));
    // Investor Data
    if (this.typeOfUser === 1) {

    } else {
      // Ivestee Data
      this.investeeService.displayFeed().subscribe(
        (data) => {
          console.log(data);
          this.feedData = data;
        }
      );
    }
  }

}
