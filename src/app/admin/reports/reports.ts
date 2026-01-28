import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-reports',
  imports: [CommonModule,Sidebar],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports {
reportData = [
    { name: 'Dr. Kumar', count: 5 },
    { name: 'Dr. Priya', count: 2 }
  ];
}
