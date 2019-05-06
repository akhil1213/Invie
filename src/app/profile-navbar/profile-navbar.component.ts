import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.css']
})
export class ProfileNavbarComponent implements OnInit {

  typeOfUser: number;
  constructor(private router: Router) {}

  ngOnInit() {
    this.typeOfUser = parseInt(localStorage.getItem('typeOfUser'));
  }

  logout(): void {
    // CLEAR ALL AUTH STATUSES
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private clearAuthData(): void {
    localStorage.removeItem('date');
    localStorage.removeItem('user');
    localStorage.removeItem('typeOfUser');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('token');
  }
}
