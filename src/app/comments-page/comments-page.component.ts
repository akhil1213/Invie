import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit, OnDestroy {

  @Input('idea') idea;
  @Output() close = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    console.log(this.idea);
  }

  ngOnDestroy() {
    this.idea = null;
  }

  closeModal() {
    this.close.emit(false);
  }

}
