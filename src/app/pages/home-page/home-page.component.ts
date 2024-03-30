import { Component, OnInit } from '@angular/core';
import { NavPageComponent } from '../../components/nav/nav-page/nav-page.component';
import { SlideBannerComponent } from '../../components/banners/slide-banner/slide-banner.component';
import { TopDoctorsComponent } from '../../components/home/top-doctors/top-doctors.component';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavPageComponent, SlideBannerComponent, TopDoctorsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  apiUrl: string = environment.apiUrl;

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.checkToken().subscribe({
      next: (res) => {
        if (parseInt(res.status) !== 200) {
          this.router.navigate(['login']);
        }
      },
      error: (error) => {
        this.router.navigate(['login']);
      }
    });
  }

  checkToken(): Observable<any> {
    const token = this.auth.getToken();

    if (!token) {
      this.router.navigate(['login']);
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/user/me`, { headers });

  }
}
