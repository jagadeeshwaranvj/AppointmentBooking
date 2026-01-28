import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-availability',
  standalone: true,
  imports: [CommonModule,Sidebar,FormsModule],
  templateUrl: './availability.html',
  styleUrls: ['./availability.css'],
})
export class Availability {
 days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  availabilityList = [
    { day: 'Monday', start: '09:00', end: '12:00' }
  ];

  newAvailability = {
    day: '',
    start: '',
    end: ''
  };

  addAvailability() {
    this.availabilityList.push({ ...this.newAvailability });
    this.newAvailability = { day: '', start: '', end: '' };
  }
}
