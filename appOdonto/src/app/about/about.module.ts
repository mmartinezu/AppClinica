import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class AboutModule { }
