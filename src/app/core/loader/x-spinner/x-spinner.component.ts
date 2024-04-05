import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-x-spinner',
  templateUrl: './x-spinner.component.html',
  styleUrls: ['./x-spinner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XSpinnerComponent {
  constructor(public loader: LoaderService) {}

  showPlayButton: boolean = true;



}
