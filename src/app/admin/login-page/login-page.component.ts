import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  submited = false;
  haveError = false;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get email() {
    return this.loginForm.controls['email'] as FormControl;
  }
  get password() {
    return this.loginForm.controls['password'] as FormControl;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submited = true;

    this.authService
      .login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        returnSecureToken: true,
      })
      .subscribe(
        (res) => {
          this.loginForm.reset();
          this.router.navigate(['/admin', 'dashboard']);
          this.submited = false;
        },
        (error) => {
          this.haveError = true;
          this.submited = false;
        }
      );
  }
}
