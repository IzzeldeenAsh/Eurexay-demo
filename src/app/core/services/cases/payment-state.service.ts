import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentStateService {
  private selectedOptionSubject = new BehaviorSubject<string |null>(null);
  selectedOption$ = this.selectedOptionSubject.asObservable();

  setSelectedOption(opt:string){
    this.selectedOptionSubject.next(opt)
  }
  constructor() { }
}
