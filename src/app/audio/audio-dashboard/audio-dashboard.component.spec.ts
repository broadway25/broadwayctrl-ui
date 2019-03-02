import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioDashboardComponent } from './audio-dashboard.component';

describe('AudioDashboardComponent', () => {
  let component: AudioDashboardComponent;
  let fixture: ComponentFixture<AudioDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
