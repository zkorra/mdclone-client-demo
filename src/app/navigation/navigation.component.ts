import { Component, OnInit } from '@angular/core';
import { User } from '@core/models';
import { UserService } from '@core/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  user$ = this.userService.getUser();

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onLogout() {
    this.userService.purgeUser();
  }
}
