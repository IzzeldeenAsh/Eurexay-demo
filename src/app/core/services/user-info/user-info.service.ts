import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { AlertsService } from '../alert/alerts.service';
import { Router } from '@angular/router';
import { API_BASE_URL } from 'src/app/appconfig';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private apiUrl = `${API_BASE_URL}`;
  
  // Step 1: Declare BehaviorSubject with initial value as null
  public userDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public userData$: Observable<any> = this.userDataSubject.asObservable();

  constructor(private http: HttpClient, private _alert: AlertsService) {}


  // Helper method to get current user data value
  getCurrentUserData(): any {
    return this.userDataSubject.value;
  }
  updateProfile(prfileData: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/update-participant-profile`, prfileData).pipe(
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
  updateBio(bio: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/update-profile-bio`, {
      "bio" : bio
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

  updateProfileImage(formData:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/update-profile-image`, formData).pipe(
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
  updateInstituteImages(formData:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/upload-images`, formData).pipe(
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
