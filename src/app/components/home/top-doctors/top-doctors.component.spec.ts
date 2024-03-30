import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDoctorsComponent } from './top-doctors.component';

describe('TopDoctorsComponent', () => {
  let component: TopDoctorsComponent;
  let fixture: ComponentFixture<TopDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
