import { TestBed } from '@angular/core/testing';

import { crudService } from './crud.service';

describe('ListadosService', () => {
  let service: crudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(crudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
