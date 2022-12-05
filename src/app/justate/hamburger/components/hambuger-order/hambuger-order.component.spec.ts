import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HambugerOrderComponent } from './hambuger-order.component';

describe('HambugerOrderComponent', () => {
  let component: HambugerOrderComponent;
  let fixture: ComponentFixture<HambugerOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HambugerOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HambugerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
