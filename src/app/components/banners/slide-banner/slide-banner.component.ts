import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { trigger, transition, style, animate } from '@angular/animations';
import { isPlatformBrowser } from "@angular/common";


@Component({
  selector: 'app-slide-banner',
  standalone: true,
  templateUrl: './slide-banner.component.html',
  styleUrls: ['./slide-banner.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class SlideBannerComponent implements AfterViewInit {
  bannerImageUrl: string = environment.appUrl + "/banners/background-banner.png";
  leftButtonDisable = false;
  rightButtonDisable = false;
  // Define your slides as an array
  slides = [
    { image: "/banners/slide-banner01.png", number: '01' },
    { image: "/banners/slide-banner02.png", number: '02' },
    { image: "/banners/slide-banner03.png", number: '03' },
    // Add more slides as needed
  ];

  isBrowser = signal(false);  // a signal to store if platform is browser

  // Index to keep track of the current slide
  currentSlideIndex: number = 0;
  
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));  // save isPlatformBrowser in signal
  }

  ngAfterViewInit(): void {
    if(this.isBrowser()){
      // Call autoAdvanceSlide method every 5 seconds (5000 milliseconds)
      setInterval(() => {
        this.autoAdvanceSlide();
      }, 5000);
    }
  }

  previousSlide() {
    this.rightButtonDisable = false;

    // If the index becomes less than 0, disable button
    if (this.currentSlideIndex == 0) {
      this.leftButtonDisable = true;
      return;
    }

    // Decrement the current slide index
    this.currentSlideIndex--;
  }

  nextSlide() {
    this.leftButtonDisable = false;

    if (this.currentSlideIndex < this.slides.length - 1) {
      // Increment the current slide index
      this.currentSlideIndex++;
    }
    else {
      this.rightButtonDisable = true;
      return;
    }
  }

  autoAdvanceSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      // Increment the current slide index
      this.currentSlideIndex++;
    }
    else {
      // Reset to the first slide
      this.currentSlideIndex = 0;
    }
  }

  getImageUrl() {
    if (this.slides[this.currentSlideIndex] !== undefined)
      return environment.appUrl + this.slides[this.currentSlideIndex].image;
    else {
      return environment.appUrl + this.slides[0].image;
    }
  }
}
