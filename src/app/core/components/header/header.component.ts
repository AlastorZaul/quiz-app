import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  avatarInitial = '';

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;

      if (status) {
        this.setAvatar();
      }
    });
  }

  setAvatar() {
    this.avatarInitial = this.auth.getPersistedUser().username[0] || 'Q';
  }

  logout() {
    this.auth.logout();

    this.toast.showSuccess('Successfully logged out.');

    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 3000);
  }
}
