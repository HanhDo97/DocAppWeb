import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.css'
})
export class NavPageComponent {
  logoImage: string = environment.appUrl +'/logos/logo.png';

  constructor(private router: Router, private auth: AuthService){}

  logout(){
    this.auth.clearToken();
    this.router.navigate(['login']);
  }
}
