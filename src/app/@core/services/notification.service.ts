import { Injectable, NgZone } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private zone: NgZone, private snackBar: MatSnackBar) {}

  config: MatSnackBarConfig = {
    horizontalPosition: 'end',
    verticalPosition: 'top',
  };

  displaySuccess(message: string) {
    /*
     * allows messageService to run a function inside the Angular zone
     */
    this.zone.run(() => {
      this.snackBar.open(message, 'X', this.config);
    });
  }

  displayError(message: string) {
    this.zone.run(() => {
      this.snackBar.open(message, 'X', {
        ...this.config,
        panelClass: ['error'],
      });
    });
  }
}
