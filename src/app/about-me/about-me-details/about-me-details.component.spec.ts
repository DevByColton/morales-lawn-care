import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeDetailsComponent } from './about-me-details.component';

describe('AboutMeDetailsComponent', () => {
  let component: AboutMeDetailsComponent;
  let fixture: ComponentFixture<AboutMeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
