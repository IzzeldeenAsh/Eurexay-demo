import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitSpinnerComponent } from './wait-spinner/wait-spinner.component';
import { ImagesLoaderComponent } from './images-loader/images-loader.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { HeaderComponent } from './header/header.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { KeeniconComponent } from './keenicon/keenicon.component';

@NgModule({
  declarations: [
    WaitSpinnerComponent,ImagesLoaderComponent,PageLoaderComponent,KeeniconComponent, HeaderComponent
  ],
  imports: [CommonModule,InlineSVGModule],
  exports:[WaitSpinnerComponent,ImagesLoaderComponent,HeaderComponent,KeeniconComponent]
})
export class SharedModule {}
