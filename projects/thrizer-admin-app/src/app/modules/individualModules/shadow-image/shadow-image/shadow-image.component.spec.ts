import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowImageComponent } from './shadow-image.component';

describe('ShadowImageComponent', () => {
  let component: ShadowImageComponent;
  let fixture: ComponentFixture<ShadowImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
