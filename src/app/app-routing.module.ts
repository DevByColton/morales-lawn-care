import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstants } from './app.constants';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home/home.component';
import { PricingComponent } from './pricing/pricing/pricing.component';
import { AvailabilityComponent } from './availability/availability/availability.component';
import { ContactMeComponent } from './contact-me/contact-me/contact-me.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { MyEquipmentComponent } from './my-equipment/my-equipment/my-equipment.component';

const routes: Routes = [
  { path: '', redirectTo: RouteConstants.HOME_ROUTE, component: HomeComponent, pathMatch: 'full' },
  { path: RouteConstants.PRICING_ROUTE, component: PricingComponent },
  { path: RouteConstants.AVAILABILITY_ROUTE, component: AvailabilityComponent },
  { path: RouteConstants.CONTACT_ME_ROUTE, component: ContactMeComponent },
  { path: RouteConstants.GALLERY_ROUTE, component: GalleryComponent },
  { path: RouteConstants.MY_EQUIPMENT_ROUTE, component: MyEquipmentComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
