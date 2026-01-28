import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { AppointmentService } from '../../shared/appointementservice';
interface Appointment {
  customer: string;
  provider: string;
  service: string;
  date: string;
  slot: string;
  status: string;
}

@Component({
  selector: 'app-reports',
  imports: [CommonModule,Sidebar],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports {
 appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {
    this.appointments = this.appointmentService.getAllAppointments();
  }

  // 1️⃣ Appointments by Service
  get appointmentsByService() {
    const result: Record<string, number> = {};
    this.appointments.forEach(a => {
      result[a.service] = (result[a.service] || 0) + 1;
    });
    return result;
  }

  // 2️⃣ Status count
  get statusCount() {
    return {
      Scheduled: this.appointments.filter(a => a.status === 'Scheduled').length,
      Completed: this.appointments.filter(a => a.status === 'Completed').length,
      Cancelled: this.appointments.filter(a => a.status === 'Cancelled').length
    };
  }

  // 3️⃣ Appointments by Date
  get appointmentsByDate() {
    const result: Record<string, number> = {};
    this.appointments.forEach(a => {
      result[a.date] = (result[a.date] || 0) + 1;
    });
    return result;
  
  }
}
