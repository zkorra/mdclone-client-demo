import { NgModule } from '@angular/core';

import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } },
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
