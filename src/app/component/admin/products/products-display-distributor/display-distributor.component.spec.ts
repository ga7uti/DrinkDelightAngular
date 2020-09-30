import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDistributorComponent } from './display-distributor.component';

describe('DisplayDistributorComponent', () => {
  let component: DisplayDistributorComponent;
  let fixture: ComponentFixture<DisplayDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
