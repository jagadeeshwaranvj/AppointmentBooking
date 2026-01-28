import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serviceservices {
  private services = [
    {
      name: 'Consultation',
      description: 'Doctor consultation',
      duration: 30,
      active: true
    },
    {
      name: 'Therapy',
      description: 'Therapy session',
      duration: 60,
      active: true
    },
    {
      name: 'Demo',
      description: 'Product demo',
      duration: 45,
      active: false
    }
  ];

  // Admin & Booking
  getServices() {
    return this.services;
  }

  // Booking page uses ONLY active services
  getActiveServices() {
    return this.services.filter(s => s.active);
  }

  // Admin actions (later UI)
  addService(service: any) {
    this.services.push(service);
  }

  updateService(index: number, service: any) {
    this.services[index] = service;
  }

  toggleService(index: number) {
    this.services[index].active = !this.services[index].active;
  }
}
