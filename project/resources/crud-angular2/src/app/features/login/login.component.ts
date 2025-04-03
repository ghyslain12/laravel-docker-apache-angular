import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div>
      <h1>Connexion</h1>
      <form (ngSubmit)="onSubmit()">
        <mat-form-field>
          <mat-label>Email</mat-label>
          <input matInput [(ngModel)]="email" name="email" type="email" required>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Mot de passe</mat-label>
          <input matInput [(ngModel)]="password" name="password" type="password" required>
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit">Se connecter</button>
      </form>
    </div>
  `,
  styles: [`
    div { padding: 20px; }
    mat-form-field { display: block; margin-bottom: 16px; }
  `]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Passer un objet avec email et password
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response: any) => {
        console.log('Token reçu et stocké :', response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Erreur de connexion :', error);
      }
    });
  }
}
