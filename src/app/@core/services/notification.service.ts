import { Injectable, NgZone } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private TOAST_KEY = 'main-toast';

  constructor(private zone: NgZone, private messageService: MessageService) {}

  displaySuccess(message: string) {
    /*
     * allows messageService to run a function inside the Angular zone
     */
    this.zone.run(() => {
      this.messageService.add({
        key: this.TOAST_KEY,
        severity: 'success',
        summary: 'Success',
        detail: message,
      });
    });
  }

  displayError(message: string) {
    this.zone.run(() => {
      this.messageService.add({
        key: this.TOAST_KEY,
        severity: 'error',
        summary: 'Something went wrong',
        detail: message,
      });
    });
  }
}
