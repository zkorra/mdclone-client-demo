import { NgModule } from '@angular/core';
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
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
