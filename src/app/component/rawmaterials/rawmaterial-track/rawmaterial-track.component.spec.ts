import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialTrackComponent } from './rawmaterial-track.component';

describe('RawmaterialTrackComponent', () => {
  let component: RawmaterialTrackComponent;
  let fixture: ComponentFixture<RawmaterialTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
