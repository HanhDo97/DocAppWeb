import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavPageComponent } from '../../components/nav/nav-page/nav-page.component';
import { SlideBannerComponent } from '../../components/banners/slide-banner/slide-banner.component';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { TopDoctorsComponent } from '../../components/doctors/top-doctors/top-doctors.component';
import { HomeSearchComponent } from '../../components/searchs/home-search/home-search.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeSearchComponent, NavPageComponent, SlideBannerComponent, TopDoctorsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, AfterViewInit {
  apiUrl: string = environment.apiUrl;
  token: string | null = '';

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
  }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }
}
