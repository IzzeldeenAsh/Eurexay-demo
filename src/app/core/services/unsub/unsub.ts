import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export abstract class Unsub implements OnDestroy{

 destroy$ = new Subject<void>();
 ngOnDestroy(): void {

  this.destroy$.next()
  this.destroy$.complete()
}

}
