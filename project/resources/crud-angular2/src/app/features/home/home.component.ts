import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  template: `
    <div>
      <h1>Bienvenue sur Home</h1>
      <button mat-button (click)="navigateToSale()">Aller à Sale (programmatique)</button>
      <button mat-button (click)="logout()">Déconnexion</button>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //private location = inject(Location);

  constructor(private authService: AuthService, private router: Router) {
    console.log('Token au chargement de Home :', this.authService.getToken());
  }
  
  ngOnInit() {
    //this.location.reload();
  }
  
  navigateToSale() {
    console.log('Tentative de navigation vers /sale via programmatique');
    this.router.navigate(['/sale']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
