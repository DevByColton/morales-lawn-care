import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEquipmentOverviewComponent } from './my-equipment-overview.component';

describe('MyEquipmentOverviewComponent', () => {
  let component: MyEquipmentOverviewComponent;
  let fixture: ComponentFixture<MyEquipmentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEquipmentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEquipmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
