import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private toast: ToastService,
    private ss: StorageService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const credentials = this.loginForm.value;

    this.auth.login(
      credentials.email,
      credentials.password
    ).subscribe(
      resp => {
        this.loginForm.reset();

        this.auth.persistUser(resp);

        this.toast.showSuccess('Successfully logged in.');

        const attemptedRoute = this.ss.getItem('attemptedRoute');

        this.ss.removeItem('attemptedRoute');

        this.router.navigateByUrl(attemptedRoute || '/')
      },
      () => {
        this.toast.showDanger('Login unsuccessful. Check your credentials.');
      }
    );
  }
}
