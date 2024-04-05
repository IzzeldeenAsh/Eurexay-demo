import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertsService } from '../alert/alerts.service';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { API_BASE_URL } from 'src/app/appconfig';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private apiUrl = `${API_BASE_URL}`;
  constructor(private http: HttpClient, private _alert: AlertsService,private router:Router) {}

  getNotificaitons():Observable<any>{
    const dummy ={
      "status": {
          "code": "0",
          "description": "Success",
          "reason": "Success"
      },
      "result": {
          "allNotifications": [
              {
                  "label": "OWNER_RECEIVED_OFFER",
                  "title": "YOU RECEIVED AN OFFER",
                  "description": "Your case Activision -TO received a new offer from Individual",
                  "timestamp": "2024-02-06T10:29:03",
                  "itemType": "OFFER",
                  "itemUUID": "488390ea-4231-4cae-8d9c-fdef126f25a2",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "The participant (Individual) has signed the contract for your case (Activision -TO)",
                  "timestamp": "2024-02-06T10:36:06",
                  "itemType": "CONTRACT",
                  "itemUUID": "30465c98-f669-4ef3-8c0b-6a701b3b58fe",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "Your contract of case (Activision -TO) required payment deposit in order to be finalized",
                  "timestamp": "2024-02-06T10:36:06",
                  "itemType": "CONTRACT",
                  "itemUUID": "30465c98-f669-4ef3-8c0b-6a701b3b58fe",
                  "seen": true
              },
              {
                  "label": "OWNER_RECEIVED_OFFER",
                  "title": "YOU RECEIVED AN OFFER",
                  "description": "Your case SDS received a new offer from Individual",
                  "timestamp": "2024-02-06T16:52:11",
                  "itemType": "OFFER",
                  "itemUUID": "c137da2d-9bde-403e-b5c7-d4b0757b2b57",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "The participant (Individual) has signed the contract for your case (SDS)",
                  "timestamp": "2024-02-06T16:53:10",
                  "itemType": "CONTRACT",
                  "itemUUID": "7231bc17-e27d-40c1-85fa-d8d053b2b78f",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "Your contract of case (SDS) required payment deposit in order to be finalized",
                  "timestamp": "2024-02-06T16:53:10",
                  "itemType": "CONTRACT",
                  "itemUUID": "7231bc17-e27d-40c1-85fa-d8d053b2b78f",
                  "seen": true
              },
              {
                  "label": "OWNER_RECEIVED_OFFER",
                  "title": "YOU RECEIVED AN OFFER",
                  "description": "Your case Izaldeen Ashour received a new offer from Individual",
                  "timestamp": "2024-02-06T16:56:15",
                  "itemType": "OFFER",
                  "itemUUID": "1bbf80cc-b3df-4fd2-bbcf-57dfe9197a1c",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "The participant (Individual) has signed the contract for your case (Izaldeen Ashour)",
                  "timestamp": "2024-02-06T16:57:13",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "Your contract of case (Izaldeen Ashour) required payment deposit in order to be finalized",
                  "timestamp": "2024-02-06T16:57:13",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": true
              },
              {
                  "label": "PARTICIPANT_AVAILABLE_CASE",
                  "title": "NEW CASE IS AVAILABLE",
                  "description": "A new business case : sd is now available for you",
                  "timestamp": "2024-02-06T19:05:34",
                  "itemType": "BUSINESS_CASE",
                  "itemUUID": "fe339a24-c0ed-4a87-b030-d6d204555365",
                  "seen": true
              },
              {
                  "label": "NEW_PRIZE_PARTICIPANT",
                  "title": "NEW PRIZE PARTICIPANT",
                  "description": "Your prize (Poppy) has a new participant",
                  "timestamp": "2024-02-07T17:58:06",
                  "itemType": "PRIZE",
                  "itemUUID": "736b1e4a-1b64-4cf4-a75b-29161c898b4f",
                  "seen": true
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Izaldeen Ashour) has been finalized and the case is active now ",
                  "timestamp": "2024-02-16T17:11:05",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": false
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Izaldeen Ashour) has been finalized and the case is active now ",
                  "timestamp": "2024-02-16T17:14:35",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": false
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Izaldeen Ashour) has been finalized and the case is active now ",
                  "timestamp": "2024-02-16T17:15:43",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": false
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Izaldeen Ashour) has been finalized and the case is active now ",
                  "timestamp": "2024-02-16T17:17:49",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": false
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Izaldeen Ashour) has been finalized and the case is active now ",
                  "timestamp": "2024-02-16T17:22:45",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": false
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Izaldeen Ashour) has been finalized and the case is active now ",
                  "timestamp": "2024-02-16T17:23:26",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": false
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Izaldeen Ashour) has been finalized and the case is active now ",
                  "timestamp": "2024-02-16T17:23:45",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": false
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Izaldeen Ashour) has been finalized and the case is active now ",
                  "timestamp": "2024-02-16T17:23:50",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": false
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Izaldeen Ashour) has been finalized and the case is active now ",
                  "timestamp": "2024-02-16T17:25:14",
                  "itemType": "CONTRACT",
                  "itemUUID": "bd1812b8-acd0-4517-b845-5bfe478068aa",
                  "seen": false
              },
              {
                  "label": "PARTICIPANT_AVAILABLE_CASE",
                  "title": "NEW CASE IS AVAILABLE",
                  "description": "A new business case : CHANGED is now available for you",
                  "timestamp": "2024-02-21T10:16:08",
                  "itemType": "BUSINESS_CASE",
                  "itemUUID": "a11",
                  "seen": true
              },
              {
                  "label": "PARTICIPANT_AVAILABLE_CASE",
                  "title": "NEW CASE IS AVAILABLE",
                  "description": "A new business case : CHANGED is now available for you",
                  "timestamp": "2024-02-21T10:16:27",
                  "itemType": "BUSINESS_CASE",
                  "itemUUID": "a11",
                  "seen": true
              },
              {
                  "label": "OWNER_RECEIVED_OFFER",
                  "title": "YOU RECEIVED AN OFFER",
                  "description": "Your case PayPal Case received a new offer from Individual",
                  "timestamp": "2024-02-24T14:29:50",
                  "itemType": "OFFER",
                  "itemUUID": "e26a1b58-1205-4394-a115-bdd31c96c0f0",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "The participant (Individual) has signed the contract for your case (PayPal Case)",
                  "timestamp": "2024-02-24T14:30:34",
                  "itemType": "CONTRACT",
                  "itemUUID": "323282aa-284a-4929-8bd8-1fa511b9bbd3",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "Your contract of case (PayPal Case) required payment deposit in order to be finalized",
                  "timestamp": "2024-02-24T14:30:34",
                  "itemType": "CONTRACT",
                  "itemUUID": "323282aa-284a-4929-8bd8-1fa511b9bbd3",
                  "seen": true
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (PayPal Case) has been finalized and the case is active now ",
                  "timestamp": "2024-02-24T14:47:53",
                  "itemType": "CONTRACT",
                  "itemUUID": "323282aa-284a-4929-8bd8-1fa511b9bbd3",
                  "seen": false
              },
              {
                  "label": "OWNER_RECEIVED_OFFER",
                  "title": "YOU RECEIVED AN OFFER",
                  "description": "Your case Notification Test received a new offer from Individual",
                  "timestamp": "2024-02-25T09:19:44",
                  "itemType": "OFFER",
                  "itemUUID": "f005f7b3-61f5-4294-b8f7-58aebead3898",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "The participant (Individual) has signed the contract for your case (Notification Test)",
                  "timestamp": "2024-02-25T09:25:45",
                  "itemType": "CONTRACT",
                  "itemUUID": "9eccdfa8-b108-438f-99a4-5212cca0b41a",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "Your contract of case (Notification Test) required payment deposit in order to be finalized",
                  "timestamp": "2024-02-25T09:25:45",
                  "itemType": "CONTRACT",
                  "itemUUID": "9eccdfa8-b108-438f-99a4-5212cca0b41a",
                  "seen": true
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Notification Test) has been finalized and the case is active now ",
                  "timestamp": "2024-02-25T09:35:43",
                  "itemType": "CONTRACT",
                  "itemUUID": "9eccdfa8-b108-438f-99a4-5212cca0b41a",
                  "seen": false
              },
              {
                  "label": "OWNER_RECEIVED_OFFER",
                  "title": "YOU RECEIVED AN OFFER",
                  "description": "Your case DeliverablesCase received a new offer from Individual",
                  "timestamp": "2024-02-25T19:05:10",
                  "itemType": "OFFER",
                  "itemUUID": "57cc56c4-2cd9-4020-8f9d-c9167cd06c5a",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "The participant (Individual) has signed the contract for your case (DeliverablesCase)",
                  "timestamp": "2024-02-25T19:06:33",
                  "itemType": "CONTRACT",
                  "itemUUID": "d2c03747-bc02-46af-b31c-f194d442b837",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "Your contract of case (DeliverablesCase) required payment deposit in order to be finalized",
                  "timestamp": "2024-02-25T19:06:33",
                  "itemType": "CONTRACT",
                  "itemUUID": "d2c03747-bc02-46af-b31c-f194d442b837",
                  "seen": true
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (DeliverablesCase) has been finalized and the case is active now ",
                  "timestamp": "2024-02-25T19:07:07",
                  "itemType": "CONTRACT",
                  "itemUUID": "d2c03747-bc02-46af-b31c-f194d442b837",
                  "seen": false
              },
              {
                  "label": "OWNER_RECEIVED_OFFER",
                  "title": "YOU RECEIVED AN OFFER",
                  "description": "Your case Delvi received a new offer from Individual",
                  "timestamp": "2024-02-25T19:48:07",
                  "itemType": "OFFER",
                  "itemUUID": "402c44f3-5496-488e-a179-1595eaacb8af",
                  "seen": true
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "The participant (Individual) has signed the contract for your case (Delvi)",
                  "timestamp": "2024-02-25T19:49:06",
                  "itemType": "CONTRACT",
                  "itemUUID": "c0e949fa-3524-4880-a3c1-a56b8d2845c5",
                  "seen": false
              },
              {
                  "label": "CONTRACT_SIGNED_BY_PARTICIPANT",
                  "title": "PARTICIPANT HAS SIGNED THE CONTRACT",
                  "description": "Your contract of case (Delvi) required payment deposit in order to be finalized",
                  "timestamp": "2024-02-25T19:49:06",
                  "itemType": "CONTRACT",
                  "itemUUID": "c0e949fa-3524-4880-a3c1-a56b8d2845c5",
                  "seen": false
              },
              {
                  "label": "CONTRACT_FINALIZED",
                  "title": "OWNER HAS FINALIZED THE CONTRACT",
                  "description": "Your contract for case (Delvi) has been finalized and the case is active now ",
                  "timestamp": "2024-02-25T19:49:33",
                  "itemType": "CONTRACT",
                  "itemUUID": "c0e949fa-3524-4880-a3c1-a56b8d2845c5",
                  "seen": false
              }
          ],
          "unseenNotificationsCount": {
              "CONTRACT_SIGNED_BY_PARTICIPANT": 2,
              "CONTRACT_FINALIZED": 13
          }
      }
  }
    return of(dummy)
  }
  }


