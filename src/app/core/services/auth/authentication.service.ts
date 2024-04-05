import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of, throwError } from 'rxjs';
import { map } from 'rxjs';
import { AlertsService } from '../alert/alerts.service';
import { environment } from 'src/environments/environment';
import { API_BASE_URL } from 'src/app/appconfig';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = `${API_BASE_URL}`;
  currentUserRole = new BehaviorSubject<string>('');
  currentUserRole$ = this.currentUserRole.asObservable();

  constructor(private http: HttpClient, private _alert: AlertsService) {}
  login(username: string, password: string): Observable<any> {
    const dummyResponse = {
      "status": {
          "code": "0",
          "description": "Success",
          "reason": "Success"
      },
      "result": {
          "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6aWRAZXVyZWt4YXkuY29tIiwiZXhwIjoxNzA5NjUyMzU4LCJpYXQiOjE3MDk1NjU5NTh9.PZrazlk64ZJ9t6DV9cdVGoXJyteu_RINMEAJsnCo2l0",
          "userType": "BUSINESS",
          "userStatus": "ACTIVE",
          "enabled": true
      }
    };
  
    // Simulate HTTP post request by returning an Observable of the dummy response
    return of(dummyResponse);
  }

  registerParticipant(formData: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/public/register-participant`, formData)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          this._alert.error(
            '',
            `Unexpected error occurred.`
          );
          console.log('error in RegistrationService', error);
          return throwError(() => new Error(error));
        })
      );
  }
  sendVerificationEmail(username: string, fullName: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/public/send-verification-email`, {
        username: username,
        fullName: fullName,
      })
      .pipe(
        catchError((error) => {
          this._alert.error(
            '',
            `Unexpected error occured.`
          );
          console.log('errorinAuthService', error);
          return throwError(() => new Error(error));
        })
      );
  }
  sendVerificationCode(
    username: string,
    code: string | number
  ): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/public/verify-code`, {
        username: username,
        verificationCode: code.toString(),
      })
      .pipe(
        catchError((error) => {
          this._alert.error(
            '',
            `Unexpected error occured.`
          );
          console.log('errorinAuthService', error);
          return throwError(() => new Error(error));
        })
      );
  }
}
