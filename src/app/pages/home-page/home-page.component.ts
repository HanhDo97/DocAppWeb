import { Component } from '@angular/core';
import { NavPageComponent } from '../../components/nav/nav-page/nav-page.component';
import { SlideBannerComponent } from '../../components/banners/slide-banner/slide-banner.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavPageComponent, SlideBannerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
