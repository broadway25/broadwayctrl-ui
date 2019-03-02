import { Component, OnInit } from '@angular/core';
import {MatSlideToggleChange} from '@angular/material';
import {AudioApiService} from '../../audio/audio-api.service';
import {SmarthomeApiService} from '../smarthome-api.service';

@Component({
  selector: 'app-switch-control',
  templateUrl: './switch-control.component.html',
  styles: []
})
export class SwitchControlComponent implements OnInit {

  constructor(private apiService: SmarthomeApiService) { }
  location = 'broadway25'

  switches = [{ 'name': 'steam', 'description' : 'Steam', 'status' : false, 'type': 'iot', 'model' : 'kasa', 'group' : 'personalcare', 'onTimeDisplay' : {} },
              { 'name': 'music', 'description' : 'Music System', 'status' : false, 'type': 'iot', 'model' : 'kasa', 'group' : 'entertainment', 'onTimeDisplay' : {}  }];

  ngOnInit() {
    this.switches.forEach( s => {
      this.apiService.switchStatus(this.location, s.type, s.model, s.group, s.name ).subscribe((res) => {

          const data: any = res;
          if ( data.relayState === 1 ) {
            s.status = true;
          } else {
            s.status = false;
          }
          s.onTimeDisplay = this.secToDispObject(data.onTime);
      });
    } );

  }
  public toggle(event: MatSlideToggleChange, systemName ) {

    console.log('Toggle fired ' +  event.checked + ' ' + systemName );

    this.switches.filter(s => s.name === systemName ).forEach(s => {
      let action = 'off';
      if ( event.checked === true ) {
        action = 'on';
      }
      this.apiService.toggleSwitch(this.location, s.type, s.model, s.group, s.name, action ).subscribe((res) => {

        const data: any = res;
        if ( data.relayState === 1 ) {
          s.status = true;
        } else {
          s.status = false;
        }
        s.onTimeDisplay = this.secToDispObject(data.onTime);
      });
    });
    // this.useDefault = event.checked;
  }

  private secToDispObject ( seconds ) {
    let days = Math.floor(seconds / (3600*24));
    seconds  -= days*3600*24;
    let hrs   = Math.floor(seconds / 3600);
    seconds  -= hrs*3600;
    let mnts = Math.floor(seconds / 60);
    seconds  -= mnts*60;
    return { 'days' :  days, 'hours' : hrs, 'minutes' : mnts, 'seconds' :  seconds };
  }
}
