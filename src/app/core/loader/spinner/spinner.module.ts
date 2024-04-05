import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XSpinnerComponent } from '../x-spinner/x-spinner.component';

@NgModule({
  declarations: [XSpinnerComponent],
  imports: [CommonModule],
  exports: [XSpinnerComponent],
})
export class SpinnerModule {}
