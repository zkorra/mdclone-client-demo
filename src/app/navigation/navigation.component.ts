import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { UserService } from '@core/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  user$ = this.userService.getUser();
  authenticated$ = this.userService.isAuthenticated();

  constructor(private userService: UserService) {}

  ngOnInit() {}

  whoAmI() {
    this.user$.pipe(take(1)).subscribe({
      next: (user) => {
        console.log(user);
      },
    });
  }

  onLogout() {
    this.userService.purgeUser();
  }
}
