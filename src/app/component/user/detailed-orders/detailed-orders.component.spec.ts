import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedOrdersComponent } from './detailed-orders.component';

describe('DetailedOrdersComponent', () => {
  let component: DetailedOrdersComponent;
  let fixture: ComponentFixture<DetailedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
