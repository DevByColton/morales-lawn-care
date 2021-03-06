import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityOverviewComponent } from './availability-overview.component';

describe('AvailabilityOverviewComponent', () => {
  let component: AvailabilityOverviewComponent;
  let fixture: ComponentFixture<AvailabilityOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
