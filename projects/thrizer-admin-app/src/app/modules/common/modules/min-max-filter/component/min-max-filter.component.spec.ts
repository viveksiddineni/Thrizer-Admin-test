import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxFilterComponent } from './min-max-filter.component';

describe('MinMaxFilterComponent', () => {
  let component: MinMaxFilterComponent;
  let fixture: ComponentFixture<MinMaxFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinMaxFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
