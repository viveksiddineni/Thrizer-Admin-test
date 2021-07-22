import { TestBed } from '@angular/core/testing';

import { BehaviourWordsManagementService } from './behaviour-words-management.service';

describe('BehaviourWordsManagementService', () => {
  let service: BehaviourWordsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviourWordsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
