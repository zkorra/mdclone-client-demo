import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@core/services';
import { take } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  user$ = this.userService.getUser();
  authenticated$ = this.userService.isAuthenticated();

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  whoAmI() {
    this.user$.pipe(take(1)).subscribe({
      next: (user) => {
        console.log(user);
      },
    });
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  goToPublish() {
    this.router.navigateByUrl('/editor');
  }

  onLogout() {
    this.userService.purgeUser();
  }
}
