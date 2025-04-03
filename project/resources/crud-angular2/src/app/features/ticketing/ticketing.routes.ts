import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './components/ticket/ticket.component';
import { ticketResolverSolo } from '../../core/services/resolvers/ticket/ticket-resolver.service-solo';
import { ticketResolver } from '../../core/services/resolvers/ticket/ticket-resolver.service';
import { TicketFormComponent } from './components/ticket/ticket-form/ticket-form.component';
import { saleResolver } from '../../core/services/resolvers/sale/sale-resolver.service';
import { TicketShowComponent } from './components/ticket/ticket-show/ticket-show.component';
import {authGuard} from '../../auth.guard';


export const ticketingRoutes: Routes = [
  { path: '', component: TicketComponent, resolve: {tickets: ticketResolver}, canActivate: [authGuard] },
  { path: 'add', component: TicketFormComponent, resolve: {sales: saleResolver}, canActivate: [authGuard] },
  { path: 'edit/:id', component: TicketFormComponent, resolve: {ticket: ticketResolverSolo, sales: saleResolver}, canActivate: [authGuard] },
  { path: 'show/:id', component: TicketShowComponent, resolve: {ticket: ticketResolverSolo}, canActivate: [authGuard] }
];



