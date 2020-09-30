import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialStockupdateComponent } from './rawmaterial-stockupdate.component';

describe('RawmaterialStockupdateComponent', () => {
  let component: RawmaterialStockupdateComponent;
  let fixture: ComponentFixture<RawmaterialStockupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialStockupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialStockupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
