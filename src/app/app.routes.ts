import { Routes } from '@angular/router';

import { Login } from './auth/login/login';

import { AdminDashboardComponent } from './admin/AdminDashboardComponent/dashboard';
import { Services } from './admin/services/services';
import { Providers } from './admin/providers/providers';


import { ProviderDashboardComponent } from './provider/ProviderDashboardComponent/dashboard';
import { Availability } from './provider/availability/availability';
import { Customerdasboard } from './customer/customerdasboard/customerdasboard';
import { Booking } from './customer/booking/booking';
import { MyAppointments } from './customer/my-appointments/my-appointments';
import { Customers } from './admin/customers/customers';
import { Appointments } from './admin/appointments/appointments';
import { Reports } from './admin/reports/reports';
import { Providerappointement } from './provider/providerappointement/providerappointement';

import { authguardGuard } from './shared/authguard-guard';
import { Registeration } from './admin/registeration/registeration';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },

  {path:'admin',component:AdminDashboardComponent,canActivate:[authguardGuard('admin')]},
  {path:'admin/services',component:Services,canActivate:[authguardGuard('admin')]},
  {path:'admin/providers',component:Providers,canActivate:[authguardGuard('admin')]},
{path:'admin/customers',component:Customers,canActivate:[authguardGuard('admin')]},
{path:'admin/appointments',component:Appointments,canActivate:[authguardGuard('admin')]},
{path:'admin/registeration',component:Registeration,canActivate:[authguardGuard('admin')]}, 

    {path:'provider',component:ProviderDashboardComponent,canActivate:[authguardGuard('provider')]},
    {path:'provider/availability',component:Availability,},

    {path:'admin/reports',component:Reports,canActivate:[authguardGuard('admin')]},
    {path:'admin/registeration',component:Registeration,canActivate:[authguardGuard('admin')]},

{path:'customer',component:Customerdasboard,canActivate:[authguardGuard('customer')]},
  {path:'customer/booking',component:Booking,canActivate:[authguardGuard('customer')]},

  {path:'customer/my-appointments',component:MyAppointments,canActivate:[authguardGuard('customer')]},

  {path:'provider/appointments',component:Providerappointement,canActivate:[authguardGuard('provider')]},

  
];
