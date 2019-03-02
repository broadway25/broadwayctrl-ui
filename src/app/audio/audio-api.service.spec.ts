import { TestBed } from '@angular/core/testing';

import { AudioApiService } from './audio-api.service';

describe('AudioApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioApiService = TestBed.get(AudioApiService);
    expect(service).toBeTruthy();
  });
});
