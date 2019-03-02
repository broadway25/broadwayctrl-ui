import { TestBed } from '@angular/core/testing';

import { SmarthomeApiService } from './smarthome-api.service';

describe('SmarthomeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmarthomeApiService = TestBed.get(SmarthomeApiService);
    expect(service).toBeTruthy();
  });
});
