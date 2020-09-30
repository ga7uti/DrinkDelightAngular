import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialSupplierComponent } from './rawmaterial-supplier.component';

describe('RawmaterialSupplierComponent', () => {
  let component: RawmaterialSupplierComponent;
  let fixture: ComponentFixture<RawmaterialSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
