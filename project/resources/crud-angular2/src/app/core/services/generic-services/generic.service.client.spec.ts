import {GenericService} from './generic.service';
import {TestBed} from '@angular/core/testing';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Client} from '../../models/client.model';
import {User} from '../../models/user.model';

describe('Client CRUD Operations', () => {
  let service: GenericService<Client>;
  let httpMock: HttpTestingController;
  let baseUri = environment.baseUri;
  const mockUser: User = { id: 1, name: 'user1', email: 'test@gmail.com' };
  const mockClient: Client = { id: 1, surnom: 'client1',  idUser: 1, userName: 'user1', user: mockUser };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        GenericService,
        provideHttpClient(), // Fournit HttpClient
        provideHttpClientTesting() // Fournit les outils de test pour HTTP
      ] // Ajoute le service ici
    });

    service = TestBed.inject(GenericService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie qu'il n'y a pas de requêtes HTTP en attente
  });

  it('should create a client', () => {
    service.create(`${baseUri}/api/utilisateur`, mockClient).subscribe(client => {
      expect(client).toEqual(mockClient);
    });

    const req = httpMock.expectOne(`${baseUri}/api/utilisateur`);
    expect(req.request.method).toBe('POST');
    req.flush(mockClient);
  });

  it('should get a client by id', () => {
    service.getById(`${baseUri}/api/utilisateur`, 1).subscribe(client => {
      expect(client).toEqual(mockClient);
    });

    const req = httpMock.expectOne(`${baseUri}/api/utilisateur/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockClient);
  });

  it('should handle error when getting client fails', () => {
    service.getById(`${baseUri}/api/utilisateur`, 1).subscribe({
      error: (error) => {
        expect(error.message).toBe('Not found');
      }
    });

    const req = httpMock.expectOne(`${baseUri}/api/utilisateur/1`);
    req.flush('Not found', { status: 404, statusText: 'Not Found' });
  });

  it('should get all clients', () => {
    service.getAll(`${baseUri}/api/utilisateur`).subscribe(clients => {
      expect(clients.length).toBe(1);
      expect(clients[0]).toEqual(mockClient);
    });

    const req = httpMock.expectOne(`${baseUri}/api/utilisateur`);
    expect(req.request.method).toBe('GET');
    req.flush([mockClient]);
  });

  it('should update a client', () => {
    service.update(`${baseUri}/api/utilisateur`, 1, mockClient).subscribe(client => {
      expect(client).toEqual(mockClient);
    });

    const req = httpMock.expectOne(`${baseUri}/api/utilisateur/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockClient);
  });

  it('should delete a client', () => {
    service.delete(`${baseUri}/api/utilisateur`, 1).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${baseUri}/api/utilisateur/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
