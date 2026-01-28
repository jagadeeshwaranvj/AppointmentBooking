import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { AppointmentService } from '../../shared/appointementservice';

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [CommonModule,Sidebar],
  templateUrl: './my-appointments.html',
  styleUrls: ['./my-appointments.css'],
})
export class MyAppointments {
    customerName = 'Ravi'; // later from login

  constructor(private appointmentService: AppointmentService) {}

  get appointments() {
    return this.appointmentService.getAppointmentsByCustomer(this.customerName);
  }

  cancel(index: number) {
    this.appointmentService.cancelAppointment(index);
  }

  // ✅ ADD THIS
  canCancel(a: any): boolean {
  return this.appointmentService.canCancel(a);
}
}
