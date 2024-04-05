import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringTruncatePipe } from './truncate-letters.pipe';



@NgModule({
  declarations: [
    StringTruncatePipe
  ],
  imports: [
    CommonModule
  ],exports:[
    StringTruncatePipe
  ]
})
export class TruncateLettersModule { }
