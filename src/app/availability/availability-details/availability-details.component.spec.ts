import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityDetailsComponent } from './availability-details.component';

describe('AvailabilityDetailsComponent', () => {
  let component: AvailabilityDetailsComponent;
  let fixture: ComponentFixture<AvailabilityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
