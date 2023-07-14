import { Injectable, NgZone } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private zone: NgZone, private snackBar: MatSnackBar) {}

  displaySuccess(message: string) {
    /*
     * allows messageService to run a function inside the Angular zone
     */
    this.zone.run(() => {
      this.snackBar.open(message);
    });
  }

  displayError(message: string) {
    this.zone.run(() => {
      this.snackBar.open(message, 'X', { panelClass: ['error'] });
    });
  }
}
