import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { environment } from '../../../../environments/environment';
import { ActionButtonComponent } from '../../buttons/action-button/action-button.component';

@Component({
  selector: 'app-home-search',
  standalone: true,
  imports: [ActionButtonComponent,MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './home-search.component.html',
  styleUrl: './home-search.component.css'
})
export class HomeSearchComponent {
  searchTextFormControl = new FormControl('');

  searchImage: string = environment.appUrl + '/banners/home-search.png';
}
