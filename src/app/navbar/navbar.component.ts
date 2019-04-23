import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() scrollYPosition = new EventEmitter<number>();
  constructor() {

  }

  ngOnInit() {
  }

  scrollTo(number): void {
    this.scrollYPosition.emit(number);
  }

}
