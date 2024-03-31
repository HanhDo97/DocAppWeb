import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.css'
})
export class NavPageComponent implements OnInit {
  logoImage: string = environment.appUrl + '/logos/logo.png';
  userAvatar: string = environment.appUrl + '/images/NoneImage.jfif';
  userName: string = '';
  apiUrl: string = environment.apiUrl;
  shouldDisplayUserMenu: boolean = false;

  constructor(private router: Router, private http: HttpClient, private auth: AuthService, private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.listen('window', 'click', (event: Event) => {
      this.clickOutside(event);
    });

    this.checkToken().subscribe({
      next: (res) => {
        this.userAvatar = res.data.user.image;
        this.userName = res.data.user.name
      },
      error: (error) => {
        if (error.status == 401) {
          this.logout();
        }
      }
    });
  }

  clickOutside(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // Clicked outside the menu, so hide it
      this.shouldDisplayUserMenu = false;
    }
  }

  toggleUserMenu() {
    this.shouldDisplayUserMenu = !this.shouldDisplayUserMenu;
  }

  checkToken(): Observable<any> {
    const token = this.auth.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/user/me`, { headers });

  }

  logout() {
    this.auth.clearToken();
    this.router.navigate(['login']);
  }
}
