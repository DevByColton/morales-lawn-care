import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeOverviewComponent } from './contact-me-overview.component';

describe('ContactMeOverviewComponent', () => {
  let component: ContactMeOverviewComponent;
  let fixture: ComponentFixture<ContactMeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
