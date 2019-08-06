import { TestBed } from '@angular/core/testing';

import { ServMoedasService } from './serv-moedas.service';

describe('ServMoedasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServMoedasService = TestBed.get(ServMoedasService);
    expect(service).toBeTruthy();
  });
});
