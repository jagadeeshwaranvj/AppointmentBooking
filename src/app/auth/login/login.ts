import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../../shared/authservice';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
//   role: string = '';
// constructor(
//   private router: Router,
//   private authService: Authservice) {}

// login() {
//   this.authService.setRole(this.role);

//   if (this.role === 'admin') {
//     this.router.navigate(['/admin']);
//   } else if (this.role === 'provider') {
//     this.router.navigate(['/provider']);
//   } else if (this.role === 'customer') {
//     this.router.navigate(['/customer']);
//   }
// }


role: string = '';
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: Authservice
  ) {}

  login() {
    if (!this.role || !this.username || !this.password) {
      alert('Please fill all fields');
      return;
    }

    // UI-only auth
    this.authService.setRole(this.role);
    this.authService.setUser(this.username);

    if (this.role === 'admin') {
      this.router.navigate(['/admin']);
    } else if (this.role === 'provider') {
      this.router.navigate(['/provider']);
    } else if (this.role === 'customer') {
      this.router.navigate(['/customer']);
    }
  }


}
