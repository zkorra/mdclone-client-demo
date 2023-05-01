import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './modules/primeng.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimengModule],
  declarations: [],
  providers: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, PrimengModule],
})
export class SharedModule {}
