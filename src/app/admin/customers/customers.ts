import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Userservice } from '../../shared/userservice';
@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  constructor(private userService: Userservice) {}

  // 🔥 SINGLE SOURCE OF TRUTH
  get customers() {
    return this.userService.getCustomers();
  }

  newCustomer = {
    name: '',
    email: '',
    phone: ''
  };

  editIndex: number | null = null;

  addOrUpdateCustomer() {
    if (this.editIndex === null) {
      this.userService.addCustomer({ ...this.newCustomer });
    } else {
      this.userService.updateCustomer(this.editIndex, { ...this.newCustomer });
      this.editIndex = null;
    }
    this.resetForm();
  }

  editCustomer(index: number) {
    this.newCustomer = { ...this.customers[index] };
    this.editIndex = index;
  }

  deleteCustomer(index: number) {
    this.userService.deleteCustomer(index);
  }

  resetForm() {
    this.newCustomer = { name: '', email: '', phone: '' };
  }
}
