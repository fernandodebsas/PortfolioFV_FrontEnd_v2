import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginborrar1Component } from './loginborrar1.component';

describe('Loginborrar1Component', () => {
  let component: Loginborrar1Component;
  let fixture: ComponentFixture<Loginborrar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loginborrar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Loginborrar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
