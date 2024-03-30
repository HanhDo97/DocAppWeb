import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../../../interfaces/doctor';

@Component({
  selector: 'app-home-doctor-card',
  standalone: true,
  imports: [],
  templateUrl: './home-doctor-card.component.html',
  styleUrl: './home-doctor-card.component.css'
})
export class HomeDoctorCardComponent implements OnInit {
  @Input() doctor!: Doctor;
  
  ngOnInit(): void {
  }
  
}
