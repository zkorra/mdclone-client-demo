import { Component } from '@angular/core';
import { UserService } from '@core/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private userService: UserService) {}
}
