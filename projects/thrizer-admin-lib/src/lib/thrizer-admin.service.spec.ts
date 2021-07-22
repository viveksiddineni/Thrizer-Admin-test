import { TestBed } from '@angular/core/testing';

import { ThrizerAdminService } from './thrizer-admin.service';

describe('ThrizerAdminService', () => {
  let service: ThrizerAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThrizerAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
