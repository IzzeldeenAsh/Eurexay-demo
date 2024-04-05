import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICaseDataRequirements, ICaseInfo } from '../../models/createCase.interface';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { AlertsService } from '../alert/alerts.service';
import { Router } from '@angular/router';
import { API_BASE_URL } from 'src/app/appconfig';

@Injectable({
  providedIn: 'root'
})
export class PrizeCreateService {

  private apiUrl = `${API_BASE_URL}`;
  constructor(private http: HttpClient, private _alert: AlertsService,private router:Router) {}

  createPrize(prizeFormData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/save-prize`, prizeFormData).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        this._alert.error(
          '',
          `Unexpected error occurred. Please try again later`
        ).then(()=>{

        })
        console.log('error in RegistrationService', error);
        return throwError(() => new Error(error));
      })
    );
  }


  publishPrize(uuid: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/publish-prize`, {
      "prizeUUID" :uuid
    }).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        this._alert.error(
          '',
          `Unexpected error occurred. Please try again later`
        ).then(()=>{

          
        })
        console.log('error in RegistrationService', error);
        return throwError(() => new Error(error));
      })
    );
  }


}
