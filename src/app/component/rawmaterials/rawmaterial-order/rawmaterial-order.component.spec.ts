import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialOrderComponent } from './rawmaterial-order.component';

describe('RawmaterialOrderComponent', () => {
  let component: RawmaterialOrderComponent;
  let fixture: ComponentFixture<RawmaterialOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
