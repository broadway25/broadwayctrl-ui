import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AudioDashboardComponent } from './audio/audio-dashboard/audio-dashboard.component';
import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { SwitchControlComponent } from './smarthome/switch-control/switch-control.component';


@NgModule({
  declarations: [
    AppComponent,
    AudioDashboardComponent,
    SwitchControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // new modules added here
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
