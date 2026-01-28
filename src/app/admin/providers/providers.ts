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


   constructor(private providerService: Provider) {}

  editIndex: number | null = null;

  newProvider = {
    name: '',
    email: '',
    specialization: '',
    available: true
  };

  get providers() {
    return this.providerService.getProviders();
  }

  addOrUpdateProvider() {
    if (this.editIndex === null) {
      this.providerService.addProvider({ ...this.newProvider });
    } else {
      this.providerService.updateProvider(this.editIndex, { ...this.newProvider });
      this.editIndex = null;
    }
    this.resetForm();
  }

  editProvider(index: number) {
    this.newProvider = { ...this.providers[index] };
    this.editIndex = index;
  }

  deleteProvider(index: number) {
    this.providerService.deleteProvider(index);
  }

  toggleAvailability(index: number) {
    this.providerService.toggleAvailability(index);
  }

  resetForm() {
    this.newProvider = {
      name: '',
      email: '',
      specialization: '',
      available: true
    };
  }
}
