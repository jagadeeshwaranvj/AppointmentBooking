import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { AppointmentService } from '../../shared/appointementservice';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-providerappointement',
  imports: [CommonModule,Sidebar,FormsModule],
  templateUrl: './providerappointement.html',
  styleUrls: ['./providerappointement.css'],
})
export class Providerappointement {
  providerName = 'Dr. Kumar';

  constructor(private appointmentService: AppointmentService) {}

  // Provider sees ONLY their appointments
  get appointments() {
    return this.appointmentService.getAppointmentsByProvider(this.providerName);
  }

  // Provider updates status
  updateStatus(index: number, status: string) {
    this.appointmentService.updateStatus(index, status);
  }

}
