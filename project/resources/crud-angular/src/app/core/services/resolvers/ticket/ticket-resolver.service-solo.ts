import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GenericService } from "../../generic.service";
import { Ticket } from '../../../models/ticket.model';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog.component';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ticketResolverSolo implements Resolve<any> {
  private baseUri = environment.baseUri;

  constructor(private ticket: GenericService<Ticket>, private dialog: MatDialog) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.ticket.getById(`${this.baseUri}/api/ticket`, route.params['id']).pipe(
      catchError(error => {
        this.showErrorDialog(error.message);
        return of('No data');
      })
    );
  }

  private showErrorDialog(message: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '300px',
      data: { message }
    });
  }
}
