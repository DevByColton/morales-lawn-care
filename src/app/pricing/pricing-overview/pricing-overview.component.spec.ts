import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOverviewComponent } from './pricing-overview.component';

describe('PricingOverviewComponent', () => {
  let component: PricingOverviewComponent;
  let fixture: ComponentFixture<PricingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
