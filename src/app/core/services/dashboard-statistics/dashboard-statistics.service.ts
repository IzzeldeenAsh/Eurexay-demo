import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertsService } from '../alert/alerts.service';
import { API_BASE_URL } from 'src/app/appconfig';
import { Observable, catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardStatisticsService {

  private apiUrl = `${API_BASE_URL}`;
  constructor(private http: HttpClient) { }

  getUserStatistics(): Observable<any> {
    const dummy={
      "status": {
          "code": "0",
          "description": "Success",
          "reason": "Success"
      },
      "result": {
          "availableCasesCount": 1,
          "publishedCasesCount": 3,
          "inHandCasesCount": 0,
          "receivedOffersCount": 0,
          "sentOffersCount": 0,
          "availableContractsCount": 0,
          "ownedContractsCount": 7,
          "availablePrizesCount": 0,
          "publishedPrizeCount": 1,
          "inHandPrizesCount": 0
      }
  }

  return of(dummy)
  }


}
