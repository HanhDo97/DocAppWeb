import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css'
})
export class SocialButtonComponent {
  @Input() name: string = "";
  @Input() icon: string = "";
}
