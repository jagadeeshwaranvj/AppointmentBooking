import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { AppointmentService } from '../../shared/appointementservice';
@Component({
  selector: 'app-providerappointement',
  imports: [CommonModule,Sidebar],
  templateUrl: './providerappointement.html',
  styleUrls: ['./providerappointement.css'],
})
export class Providerappointement {
providerName = 'Dr. Kumar';

  constructor(private appointmentService: AppointmentService) {}

  get appointments() {
    return this.appointmentService.getAppointmentsByProvider(this.providerName);
  }

  markCompleted(index: number) {
    this.appointmentService.updateStatus(index, 'Completed');
  }

  cancel(index: number) {
    this.appointmentService.updateStatus(index, 'Cancelled');
  }
}
