import { Component, OnInit } from '@angular/core';
import {AudioApiService} from '../audio-api.service';

@Component({
  selector: 'app-audio-dashboard',
  templateUrl: './audio-dashboard.component.html',
  styles: []
})
export class AudioDashboardComponent implements OnInit {


  constructor(private apiService: AudioApiService) { }


  location: String = '25broadway';

  audioZones: any = {};
  zoneInputs: any = {};
  ngOnInit() {
    this.audioZones = this.getZones();
    this.zoneInputs = this.availableInputs();
  }

  public partyPlay(configId: String) {
    this.apiService.partyPlay(this.location, configId).subscribe((res) => {
      console.log('Play start sent ' + JSON.stringify(res));
    });
  }

  public mp3Pause () {
    this.apiService.mp3Pause(this.location).subscribe((res) => {
      console.log('MP3 Pause ' + JSON.stringify(res));
    });
  }

  public mp3Next() {
    this.apiService.mp3Next( this.location ).subscribe((res) => {
      console.log('MP3 Next ' + JSON.stringify(res));
    });
  }

  public mp3Stop() {
    this.apiService.mp3Stop( this.location ).subscribe((res) => {
      console.log('MP3 Stop ' + JSON.stringify(res));
    });
  }

  public powerOff(zone: String) {
    this.apiService.powerOff(this.location, zone).subscribe((res) => {
      console.log('Power Off ' + JSON.stringify(res));
    });
  }

  public setVolume(evt, zoneId) {
    console.log( zoneId ) ;
    this.audioZones.filter ( z => z.zoneId === zoneId ).forEach(z => z.volume = evt.value);

    this.apiService.htdAction(this.location, zoneId, 'volume', {'volume': `${evt.value}` } ).subscribe((res) => {
      console.log('set volume ' + JSON.stringify(res));
    });

    console.log(evt.value);
  }

  public setSource(evt, zoneId) {
    console.log( evt.value ) ;
    this.audioZones.filter ( z => z.zoneId === zoneId ).forEach(z => z.source = evt.value);
    this.apiService.htdAction(this.location, zoneId, 'input', {'input': `${evt.value}` } ).subscribe((res) => {
      console.log('set volume ' + JSON.stringify(res));
    });

  }

  public togglePower ( evt, zoneId ) {
    this.audioZones.filter ( z => z.zoneId === zoneId ).forEach(z => z.source = evt.checked);

    let power = 'poweroff';
    if ( evt.checked ) {
      power = 'poweron';
    }
    this.apiService.htdAction(this.location, zoneId, power, {'input': '1' } ).subscribe((res) => {
      console.log('Power  ' + JSON.stringify(res));
    });

    console.log(evt.checked);
  }

  public getZones ( ) {
    const ret = [{ 'zoneId' : '1', 'name' : 'Living', 'power': null, 'source' : '', 'volume' : 0}
                , { 'zoneId' : '2', 'name' : 'Dining', 'power': null,  'source' : '', 'volume' : 0}
                , { 'zoneId' : '3', 'name' : 'Office', 'power': null, 'source' : '', 'volume' : 0}
                , { 'zoneId' : '4', 'name' : 'Master', 'power': null, 'source' : '', 'volume' : 0}
                , { 'zoneId' : '5', 'name' : 'Smriti', 'power': null, 'source' : '', 'volume' : 0}
                , { 'zoneId' : '6', 'name' : 'Kavya', 'power': null, 'source' : '', 'volume' : 0}
    ]
    return ret;
  }

  public availableInputs () {
    return [
          {'id' : 1, 'name' : 'Living'}
        , {'id' : 2, 'name' : 'Dining'}
        , {'id' : 3, 'name' : 'Office'}
        , {'id' : 4, 'name' : 'Master'}
        , {'id' : 5, 'name' : 'Smriti'}
        , {'id' : 6, 'name' : 'Kavya'}
        , {'id' : 7, 'name' : 'Chromecast'}
        , {'id' : 12, 'name' : 'MP3'}
        ];
  }
}
