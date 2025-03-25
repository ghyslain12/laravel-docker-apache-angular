import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadChildren: () => import('./core/core.routes').then(m => m.CoreRoutingModule) },
  { path: 'sale', loadChildren: () => import('./features/provisioning/provisioning.routes').then(m => m.ProvisioningRoutingModule) },
  { path: 'ticket', loadChildren: () => import('./features/ticketing/ticketing.routes').then(m => m.TicketingRoutingModule) },
  { path: 'user', loadChildren: () => import('./features/users/users.routes').then(m => m.UsersRoutingModule) }, 
  { path: 'client', loadChildren: () => import('./features/users/clients.routes').then(m => m.ClientsRoutingModule) }, 
  { path: 'material', loadChildren: () => import('./features/materials/materials.routes').then(m => m.MaterialsRoutingModule) }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

