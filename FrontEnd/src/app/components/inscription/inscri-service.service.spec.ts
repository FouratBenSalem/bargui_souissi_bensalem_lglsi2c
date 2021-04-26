import { TestBed } from '@angular/core/testing';

import { InscriServiceService } from './inscri-service.service';

describe('InscriServiceService', () => {
  let service: InscriServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
