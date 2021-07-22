import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMatAutocompleteComponent } from './custom-mat-autocomplete.component';

describe('CustomMatAutocompleteComponent', () => {
  let component: CustomMatAutocompleteComponent;
  let fixture: ComponentFixture<CustomMatAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMatAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMatAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
