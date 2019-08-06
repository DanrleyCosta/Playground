import { TestBed } from '@angular/core/testing';

import { ServCepService } from './serv-cep.service';

describe('ServCepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServCepService = TestBed.get(ServCepService);
    expect(service).toBeTruthy();
  });
});
