import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
   customers: any[] = [];
  providers: any[] = [];

  // 🔹 CUSTOMER
  addCustomer(customer: any) {
    this.customers.push(customer);
  }

  getCustomers() {
    return this.customers;
  }

  // 🔹 PROVIDER
  addProvider(provider: any) {
    this.providers.push(provider);
  }

  getProviders() {
    return this.providers;
  }
}
