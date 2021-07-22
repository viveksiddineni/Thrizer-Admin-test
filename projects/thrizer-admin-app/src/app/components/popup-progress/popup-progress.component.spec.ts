import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupProgressComponent } from './popup-progress.component';

describe('PopupProgressComponent', () => {
  let component: PopupProgressComponent;
  let fixture: ComponentFixture<PopupProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
