import { TestBed } from '@angular/core/testing';

import { AddressbookService } from './person.service';

describe('AddressbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressbookService = TestBed.get(AddressbookService);
    expect(service).toBeTruthy();
  });
});
