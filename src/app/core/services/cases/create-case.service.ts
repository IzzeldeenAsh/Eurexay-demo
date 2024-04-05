import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICaseDataRequirements, ICaseInfo } from '../../models/createCase.interface';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AlertsService } from '../alert/alerts.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { API_BASE_URL } from 'src/app/appconfig';

@Injectable({
  providedIn: 'root',
})
export class CreateCaseService {
  private apiUrl = `${API_BASE_URL}`;
  constructor(private http: HttpClient, private _alert: AlertsService,private router:Router) {}

  createCaseInfo(caseInfo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/save-case-info`, caseInfo).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        this._alert.error(
          '',
          `Unexpected error occurred. Please try again later`
        ).then(()=>{

          this.router.navigate(['/auth'])
          window.location.reload()
        })
        console.log('error in RegistrationService', error);
        return throwError(() => new Error(error));
      })
    );
  }

  createCaseRequirements(formData: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/save-case-requirement`, formData).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        this._alert.error(
          '',
          `Unexpected error occurred. Please try again later`
        ).then(()=>{

          this.router.navigate(['/auth'])
          window.location.reload()
        })
        console.log('error in RegistrationService', error);
        return throwError(() => new Error(error));
      })
    );
  }

  

  deleteCaseRequirement(requirementUUID: string): Observable<any>{
    // Prepare the request body and headers
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { requirementUUID: requirementUUID } // Send the UUID in the body
    };

    // Make the DELETE request
    return this.http.delete<any>(`${this.apiUrl}/api/delete-case-requirement`, httpOptions)
      .pipe(
        map(response => {
          // Handle the response here if needed
          return response;
        }),
        catchError(error => {
          // Handle errors here
          console.error('Error in ApiService', error);
          // Display an alert or handle the error appropriately
          // this._alert.error('', `Unexpected error occurred. Please try again later`);
          return throwError(() => new Error('Unexpected error occurred. Please try again later'));
        })
      );
  }

  

  publishCaese(caseUUID: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/publish-case`, {caseUUID:caseUUID}).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        this._alert.error(
          '',
          `Unexpected error occurred. Please try again later`
        ).then(()=>{

          this.router.navigate(['/cases-main/my-cases'])
          window.location.reload()
        })
        console.log('error in RegistrationService', error);
        return throwError(() => new Error(error));
      })
    );
  }


}
