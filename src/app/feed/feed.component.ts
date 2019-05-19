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
  idea;
  displayIdea: boolean;

  constructor(private investorService: InvestorService,
    private investeeService: InvesteeService) { }

  ngOnInit() {
    this.typeOfUser = parseInt(localStorage.getItem('typeOfUser'), 10);
    // Investor Data
    if (this.typeOfUser === 1) {
      this.investorService.displayFeed().subscribe(
        (data) => {
          this.feedData = data;
        }
      );
      this.investorService.setInvestor(JSON.parse(localStorage.getItem('user')));
    } else {
      // Investee Data
      this.investeeService.displayFeed().subscribe(
        (data) => {
          this.feedData = data;
        }
      );
      this.investeeService.setInvestee(JSON.parse(localStorage.getItem('user')));
    }
  }

  displayCommentView(i: number): void {
    this.displayIdea = !this.displayIdea;
    if (i === -1) {
      return;
    }
    this.idea = this.feedData[i];
  }

}
