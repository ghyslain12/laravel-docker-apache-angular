import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../../../../../core/models/user.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { environment } from '../../../../../../environments/environment';
import {GenericService} from '../../../../../core/services/generic-services/generic.service';

@Component({
  selector: 'app-user-form',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatLabel,
    MatInput,
    MatFormFieldModule,
    MatCardModule
  ],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit{
  userForm: FormGroup;
  isEditMode = false;
  userId?: number;
  titrePage = "Ajouter";
  private baseUri = environment.baseUri;

  constructor(
    private fb: FormBuilder,
    private genericService: GenericService<User>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', null],
    });
  }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId) {
      this.titrePage = "Modifier";
      this.isEditMode = true;
      this.loadUser();
    }
  }

  loadUser() {
    this.route.data.subscribe((response: any) => {
      this.userForm.patchValue(response.user);
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      const request = this.isEditMode && this.userId
        ? this.genericService.update(`${this.baseUri}/api/utilisateur`, this.userId, userData)
        : this.genericService.create(`${this.baseUri}/api/utilisateur`, userData);

      request.subscribe(() => {
        this.router.navigate(['/user']).then();
      });
    }
  }

  goBack() {
    this.router.navigate(['/user']).then();
  }
}
