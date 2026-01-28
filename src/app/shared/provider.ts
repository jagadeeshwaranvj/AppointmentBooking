import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Provider {
private providers: any[] = [];

  constructor() {
    const saved = localStorage.getItem('providers');
    this.providers = saved ? JSON.parse(saved) : [
      {
        name: 'Dr. Kumar',
        email: 'kumar@mail.com',
        specialization: 'General',
        available: true
      }
    ];
  }

  private save() {
    localStorage.setItem('providers', JSON.stringify(this.providers));
  }

  getProviders() {
    return this.providers;
  }

  getAvailableProviders() {
    return this.providers.filter(p => p.available);
  }

  addProvider(provider: any) {
    this.providers.push({ ...provider, available: true });
    this.save();
  }

  updateProvider(index: number, provider: any) {
    this.providers[index] = {
      ...provider,
      available: this.providers[index].available
    };
    this.save();
  }

  toggleAvailability(index: number) {
    this.providers[index].available = !this.providers[index].available;
    this.save();
  }

  deleteProvider(index: number) {
    this.providers.splice(index, 1);
    this.save();
  }
  
}
