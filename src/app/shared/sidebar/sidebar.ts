import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Authservice } from '../authservice';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
constructor(public authService: Authservice,private router: Router) {}
logout() {
  this.authService.logout();
  this.router.navigate(['/']);
}
}
