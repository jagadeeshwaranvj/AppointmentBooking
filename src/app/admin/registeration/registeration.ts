import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Userservice } from '../../shared/userservice';
import { Provider } from '../../shared/provider';
@Component({
  selector: 'app-registeration',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './registeration.html',
  styleUrl: './registeration.css',
})
export class Registeration {
  constructor(
    private userService: Userservice,
    private providerService: Provider
  ) {}

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

  // ✅ CUSTOMER REGISTRATION
  addCustomer() {
    this.customer.id = 'CUST-' + Date.now();
    this.userService.addCustomer({ ...this.customer });
    alert('Customer Registered');
    this.resetCustomer();
  }

  // ✅ PROVIDER REGISTRATION (FIXED)
  addProvider() {
    const providerId = 'PROV-' + Date.now();

    // 1️⃣ Save provider as USER
    this.userService.addProvider({
      id: providerId,
      name: this.provider.name,
      email: this.provider.email,
      phone: this.provider.phone,
      password: this.provider.password,
    });

    // 2️⃣ Save provider profile (availability & specialization)
    this.providerService.addProvider({
      id: providerId,
      name: this.provider.name,
      email: this.provider.email,
      specialization: 'General',
      available: true,
    });

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
