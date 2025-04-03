import { Routes, RouterModule } from '@angular/router';
import { userResolver } from '../../core/services/resolvers/user/user-resolver.service';
import { clientResolver } from '../../core/services/resolvers/client/client-resolver.service';
import { clientResolverSolo } from '../../core/services/resolvers/client/client-resolver.service-solo';
import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { ClientComponent } from './components/client/client.component';
import { ClientShowComponent } from './components/client/client-show/client-show.component';
import {authGuard} from '../../auth.guard';


export const clientsRoutes: Routes = [
  { path: '', component: ClientComponent, resolve: {clients: clientResolver, users: userResolver}, canActivate: [authGuard] },
  { path: 'add', component: ClientFormComponent, resolve: {users: userResolver}, canActivate: [authGuard] },
  { path: 'edit/:id', component: ClientFormComponent, resolve: {client: clientResolverSolo, users: userResolver}, canActivate: [authGuard] },
  { path: 'show/:id', component: ClientShowComponent, resolve: {client: clientResolverSolo}, canActivate: [authGuard] }
];
