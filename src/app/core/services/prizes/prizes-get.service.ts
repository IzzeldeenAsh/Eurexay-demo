import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/app/appconfig';
import { AlertsService } from '../alert/alerts.service';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrizesGetService {

  dummy = [
    {
      id: 1,
      name: "First Prize",
      uuid: "123e4567-e89b-12d3-a456-426614174000",
      prizeAbstract: "Description of the first prize",
      requirements: "Some requirements for winning the first prize",
      amount: 1000,
      announcementDate: "2024-05-01",
      submissionEndDate: "2024-04-30",
      status: "Open",
      judges: "Judge 1, Judge 2",
      deliveryMethod: "Mail",
      deliveryInfo: "Address to send the prize",
      publicPrize: true,
      limited: false,
      allowedParticipantNumber: 100,
      participantsNumber: 50,
      externalUrl: "https://example.com/first-prize",
      ownerParticipant: {
        id: 123,
        name: "John Doe",
        email: "john@example.com",
        profilePicBase64: ""
      },
      prizeFiles: [
        { name: "Rules.pdf", url: "https://example.com/rules.pdf" },
        { name: "Image.jpg", url: "https://example.com/image.jpg" }
      ],
      allowedCountries: ["USA", "Canada", "UK"]
    },
    {
      id: 2,
      name: "Second Prize",
      uuid: "223e4567-e89b-12d3-a456-426614174001",
      prizeAbstract: "Description of the second prize",
      requirements: "Some requirements for winning the second prize",
      amount: 500,
      announcementDate: "2024-06-01",
      submissionEndDate: "2024-05-31",
      status: "Closed",
      judges: "Judge 3, Judge 4",
      deliveryMethod: "Email",
      deliveryInfo: "Email address to send the prize",
      publicPrize: true,
      limited: true,
      allowedParticipantNumber: 50,
      participantsNumber: 30,
      externalUrl: "https://example.com/second-prize",
      ownerParticipant: {
        id: 456,
        name: "Jane Smith",
        email: "jane@example.com"
      },
      prizeFiles: [
        { name: "Rules.pdf", url: "https://example.com/rules.pdf" }
      ],
      allowedCountries: ["Australia", "Germany"]
    }
  ]
  private apiUrl = `${API_BASE_URL}`;
  constructor(private http: HttpClient, private _alert: AlertsService,private router:Router) {}

  getOwnerPrizes():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/api/get-my-prizes`).pipe(
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
  getMyPrizeParticipants(caseUUID:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/api/get-prize-participants`,{
      params:{
        uuid:caseUUID
      }
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

  getPrizeByID(prizeUUID:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/api/get-prize`,{
      params:{
        uuid:prizeUUID
      }
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


  getWhoParicipatedInThisPrize(prizeUUID:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/api/get-prize-participants`,{
      params:{
        uuid:prizeUUID
      }
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


  getAvailablePrizes():Observable<any>{
    // return this.http.get(`${this.apiUrl}/api/get-available-prizes`).pipe(
    //   map((response)=>{
    //     return  response ;
    //   }),
    //   catchError((error) => {
    //     this._alert.error(
    //       '',
    //       `Unexpected error occurred. Please try again later`
    //     ).then(()=>{

    //     })
    //     console.log('error in RegistrationService', error);
    //     return throwError(() => new Error(error));
    //   })
    // )
    return of(this.dummy)
}


participateForPrize(prizeUUID:string){
  return this.http.post<any>(`${this.apiUrl}/api/participate-in-prize`,
  {
    "prizeUUID" : prizeUUID ,
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

getInHandPrizes():Observable<any>{
  return this.http.get(`${this.apiUrl}/api/get-in-hand-prizes`).pipe(
    map((response)=>{
      return  response ;
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
  )
}
}
