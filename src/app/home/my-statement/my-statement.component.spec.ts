import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStatementComponent } from './my-statement.component';

describe('MyStatementComponent', () => {
  let component: MyStatementComponent;
  let fixture: ComponentFixture<MyStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
