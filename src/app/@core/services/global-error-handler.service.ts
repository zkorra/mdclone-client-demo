import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private notificationService: NotificationService) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      /*
       * server side error
       */
      const { message } = error;
      this.notificationService.displayError(message);
    } else {
      /*
       * client side error
       */
    }
  }
}
