import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnOrderComponent } from './update-an-order.component';

describe('UpdateAnOrderComponent', () => {
  let component: UpdateAnOrderComponent;
  let fixture: ComponentFixture<UpdateAnOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAnOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
