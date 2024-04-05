import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CaseDataSharingService {
  private changeSubject = new Subject<void>();

  //behaviors: BehaviorSubject
  private publishDateSubject = new BehaviorSubject<string>('');
  private researchDurationSubject = new BehaviorSubject<number>(0);
  private durationTypeSubject = new BehaviorSubject<string>('')
  private totalOriginalBudge = new BehaviorSubject<number>(0)

  //observables
  publishDate$ = this.publishDateSubject.asObservable();
  researchDuration$ =this.researchDurationSubject.asObservable();
  durationType$=this.durationTypeSubject.asObservable();
  totalOriginalBudge$=this.totalOriginalBudge.asObservable();


  setPublishDate(date: string) {
   this.publishDateSubject.next(date)
  }
  setresearchDuration(duration: number) {
   this.researchDurationSubject.next(duration)
  }
  setdurationType(type: string) {
    this.durationTypeSubject.next(type)
  }
  setBudget(number: number) {
    this.totalOriginalBudge.next(number)
  }
  notifyChange(){
    this.changeSubject.next();
  }
  get change$() {
    return this.changeSubject.asObservable();
}
}
