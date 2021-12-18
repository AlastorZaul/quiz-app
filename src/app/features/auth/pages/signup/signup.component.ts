import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private ss: StorageService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
  }

  get password() { return this.signupForm.get('password'); }

  signup() {
    const user = this.signupForm.value;

    this.auth.register(
      user.username,
      user.email,
      user.password
    ).subscribe(
      resp => {
        this.signupForm.reset();

        this.auth.persistUser(resp);

        this.toast.showSuccess('Successfully created account. Redirecting you to the quizzes.');

        this.router.navigateByUrl(this.ss.getItem('attemptedRoute') || '/')
      },
      () => {
        this.toast.showDanger('There was a problem registering your account.');
      }
    );
  }
}
