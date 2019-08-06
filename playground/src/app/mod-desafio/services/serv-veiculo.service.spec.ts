import { TestBed } from '@angular/core/testing';

import { ServVeiculoService } from './serv-veiculo.service';

describe('ServVeiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServVeiculoService = TestBed.get(ServVeiculoService);
    expect(service).toBeTruthy();
  });
});
