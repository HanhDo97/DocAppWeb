import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.css'
})
export class NavPageComponent {
  logoImage: string = environment.appUrl +'/logos/logo.png';

  constructor(private router: Router){}

  logout(){
    this.router.navigate(['login']);
  }
}
