import { Component, OnInit } from '@angular/core';
import { User } from '@core/models';
import { UserService } from '@core/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  loggedIn: boolean = false;
  user!: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((data) => {
      this.user = data;
    });
  }

  onLogout() {
    this.userService.purgeUser();
  }
}
