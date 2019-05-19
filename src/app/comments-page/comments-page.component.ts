import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { InvestorService } from '../services/investor.service';
import { InvesteeService } from '../services/investee.service';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit, OnDestroy {

  @Input('idea') idea;
  @Output() close = new EventEmitter<boolean>();
  comments;
  currentComment: string;
  constructor(private investorSerivce: InvestorService,
  private investeeService: InvesteeService) { }

  ngOnInit() {
    this.comments = [];
    for (let i = 0; i < this.idea.messages.length; i ++) {
      const temp =  this.idea.messages[i].split(',');
      console.log(temp);
      const comment = {
        name: temp[0],
        comment: temp[1]
      };
      this.comments.push(comment);
    }
    this.currentComment = '';
    console.log(this.idea);
  }

  comment(): void {
    console.log(this.currentComment);
    const commentInfo = {
      name: this.investorSerivce.getInvestor().name,
      comment: this.currentComment
    };
    const req = commentInfo.name + ',' + commentInfo.comment;
    this.investeeService.comment(req).subscribe(
      (data) => {
        console.log(data);
        console.log('Comment added!');
        this.comments.push(commentInfo);
      }
    );
  }

  ngOnDestroy() {
    this.idea = null;
  }

  closeModal() {
    this.close.emit(false);
  }

}
