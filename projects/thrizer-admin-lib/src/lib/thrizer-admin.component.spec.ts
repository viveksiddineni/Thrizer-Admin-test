import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrizerAdminComponent } from './thrizer-admin.component';

describe('ThrizerAdminComponent', () => {
  let component: ThrizerAdminComponent;
  let fixture: ComponentFixture<ThrizerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrizerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrizerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
