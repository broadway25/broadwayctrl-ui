import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudioApiService {
  apiURL: String = '/media';
  constructor(private httpClient: HttpClient) {}


  public partyPlay( location: String, configId: String ) {
    const payload = { 'volume' : '20'}
    // configplay/25broadway/1
    return this.httpClient.put(`${this.apiURL}/configplay/${location}/${configId}`, payload);
  }


  public mp3Pause ( location: String ) {
    const payload = { 'volume' : '20'}
    // /media/audio/25broadway/1/mp3pause
    return this.httpClient.put(`${this.apiURL}/audio/${location}/all/mp3play`, payload);
  }

  public mp3Next( location: String ) {
    const payload = { 'volume' : '20'}
    // configplay/25broadway/1
    return this.httpClient.put(`${this.apiURL}/audio/${location}/1/mp3forward`, payload);
  }

  public mp3Stop( location: String ) {
    const payload = { 'volume' : '20'}
    // configplay/25broadway/1
    return this.httpClient.put(`${this.apiURL}/audio/${location}/1/mp3stop`, payload);
  }

  public powerOff( location: String, zone: String ) {
    const payload = { 'volume' : '20'}
    // configplay/25broadway/1
    return this.httpClient.put(`${this.apiURL}/audio/${location}/${zone}/poweroff`, payload);
  }

  public htdAction( location: String, zone: String , action: String, payload: any ) {
    // payload = { 'volume' : '20'};
    return this.httpClient.put(`${this.apiURL}/audio/${location}/${zone}/${action}`, payload);
  }

}
