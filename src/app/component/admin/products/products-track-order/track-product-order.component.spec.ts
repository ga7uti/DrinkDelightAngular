import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackProductOrderComponent } from './track-product-order.component';

describe('TrackProductOrderComponent', () => {
  let component: TrackProductOrderComponent;
  let fixture: ComponentFixture<TrackProductOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackProductOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackProductOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
