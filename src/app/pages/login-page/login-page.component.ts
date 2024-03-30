import { Component, HostListener } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, FormsModule, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SocialButtonComponent } from '../../components/buttons/social-button/social-button.component';
import { ActionButtonComponent } from '../../components/buttons/action-button/action-button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ActionButtonComponent, SocialButtonComponent, MatIconModule, MatFormFieldModule, FormsModule, MatCardModule, MatButtonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  shouldSignInBtnDisable: boolean = false;

  constructor(private auth: AuthService,private router: Router, private loginService: LoginService, private snackBar: MatSnackBar) {
    this.changeAction()
    this.emailFormControl.valueChanges.subscribe(() => this.changeAction());
    this.passwordFormControl.valueChanges.subscribe(() => this.changeAction());
  }

  signInBtnClicked() {
    this.shouldSignInBtnDisable = true;

    var credential = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }

    this.loginService.login(credential).subscribe({
      next: (res) => {
        if (res.status == 422) {
          this.openSnackBar(res.message);
          this.shouldSignInBtnDisable = false;
        }
        else {
          this.auth.setToken(res.token);
          this.router.navigate(['home']);
        }
      },
      error: (error) => {
      }
    });
  }

  openSnackBar(message: string = '', action: string = 'Dimiss') {
    this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const button = document.getElementById('btn-sign-in') as HTMLButtonElement;
      if (button) {
        button.click(); // Programmatically click the button
      }
    }
  }

  changeAction() {
    this.checkFormValidOrNot();
  }

  checkFormValidOrNot() {
    // Check if both form controls are valid
    this.shouldSignInBtnDisable = this.emailFormControl.valid == false || this.passwordFormControl.valid == false;
  }
}
