import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyheaderComponent } from './stickyheader.component';

describe('StickyheaderComponent', () => {
  let component: StickyheaderComponent;
  let fixture: ComponentFixture<StickyheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
