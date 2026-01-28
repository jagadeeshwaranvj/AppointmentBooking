import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-appointments',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
})
export class Appointments {
 providers = [
    { name: 'Dr. Kumar', available: true },
    { name: 'Dr. Priya', available: false }
  ];

  customers = ['Ravi', 'Anu'];

  appointments: any[] = [];

  appointment = {
    customer: '',
    provider: '',
    date: '',
    time: '',
    status: 'Scheduled'
  };

  checkAvailability(provider: any) {
    return provider.available ? 'Available' : 'Not Available';
  }

  addAppointment() {
    this.appointments.push({ ...this.appointment });
    this.reset();
  }

  reset() {
    this.appointment = {
      customer: '',
      provider: '',
      date: '',
      time: '',
      status: 'Scheduled'
    };
  }
}
