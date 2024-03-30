import { Component, OnInit } from '@angular/core';
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
export class HomePageComponent implements OnInit {
  apiUrl: string = environment.apiUrl;
  token: string | null;

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
    this.token = this.auth.getToken();
  }
  ngOnInit(): void {
    this.checkToken().subscribe({
      next: (res) => {
        if (parseInt(res.status) !== 200) {
          this.router.navigate(['login']);
        }
      },
      error: (error) => {
        if(!this.token && error.status){
          this.router.navigate(['login']);
        }
      }
    });
  }

  checkToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<any>(`${this.apiUrl}/user/me`, { headers });

  }
}
