import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-customerdasboard',
  imports: [CommonModule,Sidebar],
template: `
    <div class="layout">
      <app-sidebar></app-sidebar>

      <div class="content">
        <h2>Customer Dashboard</h2>
        <p>Same working principle as Admin & Provider</p>
      </div>
    </div>
  `,
  styleUrls: ['./customerdasboard.css']
})
export class Customerdasboard {

}
