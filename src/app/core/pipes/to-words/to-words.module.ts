import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberToWordsPipe } from './to-words-pipe.pipe';



@NgModule({
  declarations: [
    NumberToWordsPipe
  ],
  imports: [
    CommonModule
  ],exports:[NumberToWordsPipe]
})
export class ToWordsModule { }
