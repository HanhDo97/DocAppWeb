import { Component, OnInit } from '@angular/core';
import { HomeDoctorCardComponent } from '../home-doctor-card/home-doctor-card.component';
import { DataService } from '../../../services/data.service';
import { Doctor } from '../../../interfaces/doctor';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-top-doctors',
  standalone: true,
  imports: [HomeDoctorCardComponent, CommonModule],
  templateUrl: './top-doctors.component.html',
  styleUrl: './top-doctors.component.css'
})
export class TopDoctorsComponent implements OnInit {
  topDoctors: Array<Doctor> = [];
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.getTopDoctors();
  }

  getTopDoctors() {
    this.dataService.getTopDoctors().subscribe({
      next: (res) => {
        this.topDoctors = res.data;
      }
    });
  }
}
