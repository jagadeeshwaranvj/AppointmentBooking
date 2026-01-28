import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Provider } from '../../shared/provider';
import { AppointmentService } from '../../shared/appointementservice';
import { Serviceservices } from '../../shared/serviceservices';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule,Sidebar],
 templateUrl:'booking.html',
  styleUrls: [`booking.css` ]
  
})
export class Booking {
constructor(private providerService: Provider,private appointmentService: AppointmentService,private serviceService: Serviceservices) {}



  selectedService: any = null;
  selectedProvider = '';
  selectedDate = '';
  selectedSlot = '';

  slots: string[] = [];

  generateSlots() {
    this.slots = [];

    if (!this.selectedService || !this.selectedProvider || !this.selectedDate) {
      return;
    }

    const duration = this.selectedService.duration;

    let start = 9 * 60;
    const end = 12 * 60;

    while (start + duration <= end) {
      this.slots.push(this.minutesToTime(start));
      start += duration;
    }
  }

  minutesToTime(min: number): string {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;

    return (
      String(hours).padStart(2, '0') +
      ':' +
      String(minutes).padStart(2, '0')
    );
  }

  get availableProviders() {
    return this.providerService.getAvailableProviders();
  }

  get services() {
    return this.serviceService.getActiveServices();
  }

  isSlotDisabled(slot: string): boolean {
    if (!this.selectedProvider || !this.selectedDate) {
      return true;
    }

    return this.appointmentService.isSlotBooked(
      this.selectedProvider,
      this.selectedDate,
      slot
    );
  }

  book() {
    this.appointmentService.createAppointment({
      customer: 'Ravi',
      provider: this.selectedProvider,
      service: this.selectedService.name,
      duration: this.selectedService.duration,
      date: this.selectedDate,
      slot: this.selectedSlot
    });

    alert('Appointment booked successfully');
  }

}
