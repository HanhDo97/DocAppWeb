import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDoctorCardComponent } from './home-doctor-card.component';

describe('HomeDoctorCardComponent', () => {
  let component: HomeDoctorCardComponent;
  let fixture: ComponentFixture<HomeDoctorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDoctorCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDoctorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
