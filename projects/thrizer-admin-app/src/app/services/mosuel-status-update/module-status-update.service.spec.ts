import { TestBed } from '@angular/core/testing';

import { ModuleStatusUpdateService } from './module-status-update.service';

describe('ModuleStatusUpdateService', () => {
  let service: ModuleStatusUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleStatusUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
