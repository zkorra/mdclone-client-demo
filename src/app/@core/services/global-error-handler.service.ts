import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      /*
       * server side error
       */
    } else {
      /*
       * client side error
       */
    }

    // const { message } = error;

    // console.error(message);
    // alert(message);
  }
}
