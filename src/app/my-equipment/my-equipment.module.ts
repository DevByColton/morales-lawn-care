import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEquipmentComponent } from './my-equipment/my-equipment.component';
import { MyEquipmentOverviewComponent } from './my-equipment-overview/my-equipment-overview.component';

@NgModule({
  declarations: [
    MyEquipmentComponent,
    MyEquipmentOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    MyEquipmentComponent
  ],
  exports: [
    MyEquipmentOverviewComponent
  ]
})
export class MyEquipmentModule { }
