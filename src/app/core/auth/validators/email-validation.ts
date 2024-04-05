import {
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API_BASE_URL } from 'src/app/appconfig';


export function emailAvailabilityValidator(http: HttpClient): AsyncValidatorFn {
 let  apiUrl = `${API_BASE_URL}`;
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = control.value;

    if (!email) {
      return of(null);
    }

    return http
      .post<any>(`${apiUrl}/public/check-username`, { username: email })
      .pipe(
        map((response) => {
          if (response.status.code === '0') {
            return null; // Email is valid and available
          } else {
            return { emailNotAvailable: true }; // Email is not valid or already in use
          }
        }),
        catchError(() => of(null)) // Handle API errors gracefully
      );
  };
}
