import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBannerComponent } from './slide-banner.component';

describe('SlideBannerComponent', () => {
  let component: SlideBannerComponent;
  let fixture: ComponentFixture<SlideBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
