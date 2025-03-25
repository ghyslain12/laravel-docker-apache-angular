import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { userResolver } from '../../core/services/resolvers/user/user-resolver.service';
import { clientResolver } from '../../core/services/resolvers/client/client-resolver.service';
import { clientResolverSolo } from '../../core/services/resolvers/client/client-resolver.service-solo';
import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { ClientComponent } from './components/client/client.component';
import { ClientShowComponent } from './components/client/client-show/client-show.component';


const routes: Routes = [
    { path: '', component: ClientComponent, resolve: {clients: clientResolver, users: userResolver} },
    { path: 'add', component: ClientFormComponent, resolve: {users: userResolver} },
    { path: 'edit/:id', component: ClientFormComponent, resolve: {client: clientResolverSolo, users: userResolver} },
    { path: 'show/:id', component: ClientShowComponent, resolve: {client: clientResolverSolo} }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
