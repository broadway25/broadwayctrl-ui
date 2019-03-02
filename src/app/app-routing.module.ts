import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AudioDashboardComponent} from './audio/audio-dashboard/audio-dashboard.component';
import {SwitchControlComponent} from './smarthome/switch-control/switch-control.component';

const routes: Routes = [
  { path: 'audio-home', component: AudioDashboardComponent },
  { path: 'switch-home', component: SwitchControlComponent },
  { path: '**', redirectTo: 'audio-home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
