import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleComponent } from './components/sale/sale.component';
import { saleResolver } from '../../core/services/resolvers/sale/sale-resolver.service';
import { saleResolverSolo } from '../../core/services/resolvers/sale/sale-resolver.service-solo';
import { SaleFormComponent } from './components/sale/sale-form/sale-form.component';
import { materialResolver } from '../../core/services/resolvers/material/material-resolver.service';
import { clientResolver } from '../../core/services/resolvers/client/client-resolver.service';
import { SaleShowComponent } from './components/sale/sale-show/sale-show.component';
import {authGuard} from '../../auth.guard';


export const provisioningRoutes: Routes = [
  { path: '', component: SaleComponent, resolve: {sales: saleResolver}, canActivate: [authGuard] },
  { path: 'add', component: SaleFormComponent, resolve: {materials: materialResolver, clients: clientResolver}, canActivate: [authGuard] },
  { path: 'edit/:id', component: SaleFormComponent, resolve: {sale: saleResolverSolo, materials: materialResolver, clients: clientResolver}, canActivate: [authGuard] },
  { path: 'show/:id', component: SaleShowComponent, resolve: {sale: saleResolverSolo}, canActivate: [authGuard] }
];


