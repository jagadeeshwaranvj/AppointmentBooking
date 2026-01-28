import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-customers',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
customers = [
    { name: 'Ravi', email: 'ravi@mail.com', phone: '9876543210' },
    { name: 'Anu', email: 'anu@mail.com', phone: '9123456789' }
  ];

  newCustomer = {
    name: '',
    email: '',
    phone: ''
  };

  editIndex: number | null = null;

  addOrUpdateCustomer() {
    if (this.editIndex === null) {
      // ADD
      this.customers.push({ ...this.newCustomer });
    } else {
      // UPDATE
      this.customers[this.editIndex] = { ...this.newCustomer };
      this.editIndex = null;
    }
    this.resetForm();
  }

  editCustomer(index: number) {
    this.newCustomer = { ...this.customers[index] };
    this.editIndex = index;
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }

  resetForm() {
    this.newCustomer = { name: '', email: '', phone: '' };
  }
}
