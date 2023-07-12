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
      this.handleServerError(error);
    } else {
      /*
       * client side error
       */
      this.handleClientError(error);
    }
  }

  private handleServerError(error: HttpErrorResponse) {
    const { errors } = error.error;
    const type = Object.keys(errors)[0];
    const description = Object.values(errors)[0];

    const message = `${type} ${description}.`;
    this.notificationService.displayError(message);
  }

  private handleClientError(error: Error) {
    console.error(error);
  }
}
