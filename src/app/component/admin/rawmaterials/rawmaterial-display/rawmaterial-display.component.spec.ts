import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialDisplayComponent } from './rawmaterial-display.component';

describe('RawmaterialDisplayComponent', () => {
  let component: RawmaterialDisplayComponent;
  let fixture: ComponentFixture<RawmaterialDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
