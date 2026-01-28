import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
   private role = '';

  setRole(role: string) {
    this.role = role;
  }

  getRole() {
    return this.role;
  }

  isAdmin() {
    return this.role === 'admin';
  }

  isProvider() {
    return this.role === 'provider';
  }

  isCustomer() {
    return this.role === 'customer';
  }
  logout() {
  this.role = '';
}

}
