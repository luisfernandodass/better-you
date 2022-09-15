import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdBlotterComponent } from './usd-blotter.component';

describe('UsdBlotterComponent', () => {
  let component: UsdBlotterComponent;
  let fixture: ComponentFixture<UsdBlotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsdBlotterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdBlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
