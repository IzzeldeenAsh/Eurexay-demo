import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_BASE_URL } from 'src/app/appconfig';
import { AlertsService } from '../alert/alerts.service';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseManagementService {
  private apiUrl = `${API_BASE_URL}`;
  constructor(private http: HttpClient, private _alert: AlertsService,private router:Router) {}
  /**
   * Retrieves all case management records from the server using an HTTP GET request.
   * @returns An Observable that emits the response data or throws an error if an unexpected error occurs.
   */
  getAllCasesManagement(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/get-case-management-records`).pipe(
      catchError((error) => {
        this._alert.error('', `Unexpected error occurred. Please try again later`).then(() => {});
        console.log('error in RegistrationService', error);
        return throwError(() => new Error(error));
      })
    );
  }

  /**
   * Retrieves a case management record from the server by its ID using an HTTP GET request.
   * @param id - The ID of the case management record to retrieve.
   * @returns An Observable that emits the response data of the case management record or throws an error if an unexpected error occurs.
   */
  getCasesManagementById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/get-case-management-by-id`, {
      params: {
        id: id
      }
    }).pipe(
      catchError((error) => {
        this._alert.error('', 'Unexpected error occurred. Please try again later').then(() => {});
        console.log('error in RegistrationService', error);
        return throwError(() => new Error(error));
      })
    );
  }
}
