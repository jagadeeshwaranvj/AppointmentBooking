import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { AppointmentService } from '../../shared/appointementservice';
@Component({
  selector: 'app-appointments',
  imports: [CommonModule,FormsModule,Sidebar],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
})
export class Appointments {
 constructor(private appointmentService: AppointmentService) {}

  // Admin sees all appointments
  get appointments() {
    return this.appointmentService.getAllAppointments();
  }

  // Admin updates status
  updateStatus(index: number, status: string) {
    this.appointmentService.updateStatus(index, status);
  }
}
