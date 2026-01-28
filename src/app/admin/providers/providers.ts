import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { Provider } from '../../shared/provider';
@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule,Sidebar,FormsModule],
  templateUrl: './providers.html',
  styleUrls: ['./providers.css'],
})

export class Providers {

  private providers = [
    {
      name: 'Dr. Kumar',
      email: 'kumar@mail.com',
      specialization: 'General',
      available: true
    },
    {
      name: 'Dr. Priya',
      email: 'priya@mail.com',
      specialization: 'Therapist',
      available: true
    }
  ];

  private availability = [
    {
      provider: 'Dr. Kumar',
      day: 1, // Monday
      start: '09:00',
      end: '12:00'
    },
    {
      provider: 'Dr. Kumar',
      day: 3, // Wednesday
      start: '14:00',
      end: '18:00'
    },
    {
      provider: 'Dr. Priya',
      day: 2, // Tuesday
      start: '10:00',
      end: '13:00'
    }
  ];

  // READ
  getProviders() {
    return this.providers;
  }

  getAvailableProviders() {
    return this.providers.filter(p => p.available);
  }

  // ➕ ADD
  addProvider(provider: any) {
    this.providers.push({
      ...provider,
      available: true
    });
  }

  // ✏️ UPDATE
  updateProvider(index: number, provider: any) {
    this.providers[index] = {
      ...provider,
      available: this.providers[index].available
    };
  }

  // 🔁 TOGGLE (THIS FIXES YOUR ERROR)
  toggleAvailability(index: number) {
    this.providers[index].available = !this.providers[index].available;
  }

  // 🗑️ DELETE
  deleteProvider(index: number) {
    this.providers.splice(index, 1);
  }

  // 📅 AVAILABILITY
  getAvailability(providerName: string, day: number) {
    return this.availability.find(
      a => a.provider === providerName && a.day === day
    );
  }
}
