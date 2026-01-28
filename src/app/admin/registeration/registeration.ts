import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Userservice } from '../../shared/userservice';
@Component({
  selector: 'app-registeration',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './registeration.html',
  styleUrl: './registeration.css',
})
export class Registeration {
 constructor(private userService: Userservice) {}

  customer = {
    id: '',
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  provider = {
    id: '',
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  addCustomer() {
    this.customer.id = 'CUST-' + Date.now();
    this.userService.addCustomer({ ...this.customer });
    alert('Customer Registered');
    this.resetCustomer();
  }

  addProvider() {
    this.provider.id = 'PROV-' + Date.now();
    this.userService.addProvider({ ...this.provider });
    alert('Provider Registered');
    this.resetProvider();
  }

  resetCustomer() {
    this.customer = {
      id: '',
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  }

  resetProvider() {
    this.provider = {
      id: '',
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  }
}
