import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FacilitiesRoutingModule } from './facilities-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule,
    GoogleMapsModule,
    FlexLayoutModule
  ]
})
export class FacilitiesModule { }
