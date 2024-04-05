import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateWordsPipe } from './truncate-words.pipe';



@NgModule({
  declarations: [TruncateWordsPipe],
  imports: [
    CommonModule
  ],
  exports:[TruncateWordsPipe]
})
export class TruncateWordsModule { }
