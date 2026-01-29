import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customerservice {
    private customers: any[] = [];

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer: any) {
    this.customers.push(customer);
  }

  updateCustomer(index: number, customer: any) {
    this.customers[index] = customer;
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }
}
