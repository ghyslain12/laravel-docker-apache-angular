import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {provideRouter, Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GenericService} from '../../../../../core/services/generic.service';
import {User} from '../../../../../core/models/user.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let userService: jasmine.SpyObj<GenericService<User>>;
  let router: jasmine.SpyObj<Router>;
  let route: ActivatedRoute;

  const mockUser: User = { id: 1, name: 'user1', email: 'test@gmail.com' };

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj<GenericService<User>>('GenericService', ['create', 'update']);
    const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,
        UserFormComponent
      ],
      providers: [
        { provide: GenericService<User>, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: undefined } },
            data: of({ user: undefined })
          }
        }
      ]
    }).compileComponents();

    userService = TestBed.inject(GenericService<User>) as jasmine.SpyObj<GenericService<User>>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    route = TestBed.inject(ActivatedRoute);
    router.navigate.and.returnValue(Promise.resolve(true));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('should submit form and navigate in create mode', () => {
    userService.create.and.returnValue(of(mockUser));
    component.userForm.setValue({ name: 'user1', email: 'test@gmail.com', password: 'test' });

    component.onSubmit();

    expect(userService.create).toHaveBeenCalledWith(
      `${component['baseUri']}/api/utilisateur`,
      jasmine.objectContaining({ name: 'user1', email: 'test@gmail.com', password: 'test' })
    );
    expect(userService.update).not.toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/user']);
  });

  it('should submit form and navigate in edit mode', async () => {
    TestBed.resetTestingModule();
    const userServiceSpy = jasmine.createSpyObj<GenericService<User>>('GenericService', ['create', 'update']);
    const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,
        UserFormComponent
      ],
      providers: [
        provideRouter([]),
        { provide: GenericService<User>, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 1 } }, // Mode édition
            data: of({ user: mockUser })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = TestBed.inject(GenericService<User>) as jasmine.SpyObj<GenericService<User>>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    router.navigate.and.returnValue(Promise.resolve(true));
    userService.update.and.returnValue(of(mockUser));

    component.userForm.setValue({ name: 'user1', email: 'test@gmail.com', password: 'test' });
    component.onSubmit();

    expect(userService.update).toHaveBeenCalledWith(
      `${component['baseUri']}/api/utilisateur`,
      1,
      jasmine.objectContaining({ name: 'user1', email: 'test@gmail.com', password: 'test' })
    );
    expect(userService.create).not.toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/user']);
  });
});
