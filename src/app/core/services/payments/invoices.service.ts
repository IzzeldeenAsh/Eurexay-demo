import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertsService } from '../alert/alerts.service';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { API_BASE_URL } from 'src/app/appconfig';
import { IMyInvoicesResponse } from '../../models/myInvoices.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

 private apiUrl = `${API_BASE_URL}`;
  constructor(private http: HttpClient, private _alert: AlertsService) {}

  getUserInvocies():Observable<any>{
   const dummy = {
    "status": {
        "code": "0",
        "description": "Success",
        "reason": "Success"
    },
    "result": {
        "availableCasesCount": 1,
        "publishedCasesCount": 0,
        "inHandCasesCount": 6,
        "receivedOffersCount": 0,
        "sentOffersCount": 0,
        "availableContractsCount": 0,
        "ownedContractsCount": 0,
        "availablePrizesCount": 0,
        "publishedPrizeCount": 0,
        "inHandPrizesCount": 1
    }
}

return of(dummy)
  }

 

}
