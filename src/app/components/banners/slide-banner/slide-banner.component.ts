import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-slide-banner',
  standalone: true,
  imports: [],
  templateUrl: './slide-banner.component.html',
  styleUrl: './slide-banner.component.css'
})
export class SlideBannerComponent {
  bannerImageUrl: string = environment.appUrl + "/banners/background-banner.png"
  imageBannerUrl01: string = environment.appUrl + "/banners/slide-banner01.png"
}
