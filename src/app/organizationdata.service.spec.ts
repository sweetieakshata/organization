import { TestBed } from '@angular/core/testing';

import { OrganizationdataService } from './organizationdata.service';

describe('OrganizationdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationdataService = TestBed.get(OrganizationdataService);
    expect(service).toBeTruthy();
  });
});
