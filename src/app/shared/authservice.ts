import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
   // ✅ DECLARE PROPERTIES
  private role: string = '';
  private user: string = '';

  setRole(role: string) {
    this.role = role;
    localStorage.setItem('role', role);
  }

  getRole(): string {
    return localStorage.getItem('role') || '';
  }

  setUser(username: string) {
    this.user = username;
    localStorage.setItem('user', username);
  }

  getUser(): string {
    return localStorage.getItem('user') || '';
  }

  // ✅ ROLE HELPERS (THIS FIXES YOUR ERROR)
  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }

  isProvider(): boolean {
    return this.getRole() === 'provider';
  }

  isCustomer(): boolean {
    return this.getRole() === 'customer';
  }

  isLoggedIn(): boolean {
    return !!this.getRole();
  }

  logout() {
    localStorage.clear();
  }


}
