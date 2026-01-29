import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
     private customers: any[] = [];
  private providers: any[] = [];

  // CUSTOMER
  addCustomer(customer: any) {
    this.customers.push(customer);
  }

  getCustomers() {
    return this.customers;
  }

  updateCustomer(index: number, customer: any) {
    this.customers[index] = customer;
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }

  // PROVIDER
  addProvider(provider: any) {
    this.providers.push(provider);
  }

  getProviders() {
    return this.providers;
  }
}
