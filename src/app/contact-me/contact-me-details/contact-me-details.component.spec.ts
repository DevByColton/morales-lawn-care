import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeDetailsComponent } from './contact-me-details.component';

describe('ContactMeDetailsComponent', () => {
  let component: ContactMeDetailsComponent;
  let fixture: ComponentFixture<ContactMeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
