import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MessageService } from 'primeng/api';

import { GlobalErrorHandlerService } from './services';
import { HttpTokenInterceptor, ServerErrorInterceptor } from './interceptors';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    MessageService,
  ],
})
export class CoreModule {}
