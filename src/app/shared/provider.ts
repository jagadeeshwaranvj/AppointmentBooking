import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Provider {
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

  // 🔥 ADD THIS
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

  getProviders() {
    return this.providers;
  }

  getAvailableProviders() {
    return this.providers.filter(p => p.available);
  }

  // 🔥 KEY METHOD
  getAvailability(providerName: string, day: number) {
    return this.availability.find(
      a => a.provider === providerName && a.day === day
    );
  }
}
