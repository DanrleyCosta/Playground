import { TestBed } from '@angular/core/testing';

import { ServPalindromoService } from './serv-palindromo.service';

describe('ServPalindromoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServPalindromoService = TestBed.get(ServPalindromoService);
    expect(service).toBeTruthy();
  });
});
