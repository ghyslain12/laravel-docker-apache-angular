import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { userResolver } from '../../core/services/resolvers/user/user-resolver.service';
import { userResolverSolo } from '../../core/services/resolvers/user/user-resolver.service-solo';
import { userPingResolver } from '../../core/services/resolvers/user/user-ping-resolver.service';
import { UserShowComponent } from './components/user/user-show/user-show.component';
import {authGuard} from '../../auth.guard';


export const usersRoutes: Routes = [
  { path: '', component: UserComponent, resolve: {users: userResolver}, canActivate: [authGuard] },
  { path: 'add', component: UserFormComponent, resolve: {ping: userPingResolver}, canActivate: [authGuard] },
  { path: 'edit/:id', component: UserFormComponent, resolve: {user: userResolverSolo}, canActivate: [authGuard] },
  { path: 'show/:id', component: UserShowComponent, resolve: {user: userResolverSolo}, canActivate: [authGuard] }
];
