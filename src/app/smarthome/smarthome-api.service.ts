import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmarthomeApiService {

  apiURL = 'smartcity'

  constructor(private httpClient: HttpClient) { }


  public switchStatus( location: String, deviceType: String, model: String, group: String, device: String ) {
    const payload = { 'volume' : '20'}
    // configplay/25broadway/1
    return this.httpClient.get(`${this.apiURL}/${location}/${deviceType}/${model}/${group}/${device}`);
  }

  public toggleSwitch( location: String, deviceType: String, model: String, group: String, device: String, action: String ) {
    const payload = { 'action' : action }
    // configplay/25broadway/1
    return this.httpClient.post(`${this.apiURL}/${location}/${deviceType}/${model}/${group}/${device}`, payload);
  }

}
