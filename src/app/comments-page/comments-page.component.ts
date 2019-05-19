import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.close.emit(false);
  }

}
