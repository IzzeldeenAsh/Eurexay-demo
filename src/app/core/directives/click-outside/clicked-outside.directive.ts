import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, Output } from '@angular/core';
import { filter, fromEvent, takeUntil } from 'rxjs';
import { Unsub } from '../../services/unsub/unsub';

@Directive({
  selector: '[clickedOutside]'
})
export class ClickedOutsideDirective extends Unsub implements AfterViewInit {
@Output() clickOutside =new EventEmitter();
  constructor(private element:ElementRef, @Inject(DOCUMENT) private document :Document) {super(); }
  ngAfterViewInit(): void {
   fromEvent(this.document,'click')
   .pipe(
    filter((event)=>{
      return !this.inside(event.target as HTMLElement)
    }),
    takeUntil(this.destroy$)
   )
   .subscribe(()=>{
    this.clickOutside.emit()
   })
  }
  inside(elementToCheck:HTMLElement):boolean {
  return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck)
  }
}
