import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageStartComponent } from './core/pages/page-start/page-start.component';

const routes: Routes = [
  {path: '', component:PageStartComponent},
  {path: 'about', loadChildren:()=>import('./about/about.module').then((m) => m.AboutModule)},
  {path: 'team', loadChildren:()=>import('./team/team.module').then((m) => m.TeamModule)},
  {path: 'facilities', loadChildren:()=>import('./facilities/facilities.module').then((m) => m.FacilitiesModule)},
  {path: 'treatments', loadChildren:()=>import('./treatments/treatments.module').then((m) => m.TreatmentsModule)},
  {path: 'appointments', loadChildren:()=>import('./appointments/appointments.module').then((m) => m.AppointmentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
