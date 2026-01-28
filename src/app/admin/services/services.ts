import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,Sidebar,FormsModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
})
export class Services {
 services = [
    { name: 'Consultation', duration: 30, active: true },
    { name: 'Therapy', duration: 60, active: true }
  ];

  newService = {
    name: '',
    duration: 0,
    active: true
  };

  addService() {
    this.services.push({ ...this.newService });
    this.newService = { name: '', duration: 0, active: true };
  }
}
