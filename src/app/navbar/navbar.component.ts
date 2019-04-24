import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() scrollYPosition = new EventEmitter<number>();
  onLandingPage: boolean;
  constructor(private router: Router) {}

  ngOnInit() {}

  scrollTo(number: number): void {
    this.scrollYPosition.emit(number);
  }

}
