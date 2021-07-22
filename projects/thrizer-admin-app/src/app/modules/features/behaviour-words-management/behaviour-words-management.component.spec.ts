import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourWordsManagementComponent } from './behaviour-words-management.component';

describe('BehaviourWordsManagementComponent', () => {
  let component: BehaviourWordsManagementComponent;
  let fixture: ComponentFixture<BehaviourWordsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviourWordsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourWordsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
