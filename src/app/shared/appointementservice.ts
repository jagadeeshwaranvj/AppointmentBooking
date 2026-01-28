import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
   private appointments: any[] = [];

  constructor() {
    const saved = localStorage.getItem('appointments');
    this.appointments = saved ? JSON.parse(saved) : [];
  }

  private save() {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  // Admin / Reports
  getAllAppointments() {
    return this.appointments;
  }

  // Create appointment
  createAppointment(appointment: any) {
    this.appointments.push({
      ...appointment,
      status: 'Scheduled'
    });
    this.save();
  }

  // Customer view
  getAppointmentsByCustomer(customerName: string) {
    return this.appointments.filter(a => a.customer === customerName);
  }

  // Provider view
  getAppointmentsByProvider(providerName: string) {
    return this.appointments.filter(a => a.provider === providerName);
  }

  // Update status
  updateStatus(index: number, status: string) {
    this.appointments[index].status = status;
    this.save();
  }

  // Cancel appointment
  cancelAppointment(index: number) {
    this.appointments[index].status = 'Cancelled';
    this.save();
  }

  // 🔒 Double booking check
  isSlotBooked(provider: string, date: string, slot: string): boolean {
    return this.appointments.some(a =>
      a.provider === provider &&
      a.date === date &&
      a.slot === slot &&
      a.status === 'Scheduled'
    );
  }

  // 🔒 Cancel rule
  canCancel(appointment: any): boolean {
    const today = new Date();
    const appointmentDate = new Date(appointment.date);

    today.setHours(0, 0, 0, 0);
    appointmentDate.setHours(0, 0, 0, 0);

    return (
      appointment.status === 'Scheduled' &&
      appointmentDate >= today
    );
  }


}
