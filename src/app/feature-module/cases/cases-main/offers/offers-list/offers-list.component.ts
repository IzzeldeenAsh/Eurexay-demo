import { Component,OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';
import { ICase } from 'src/app/core/models/createCase.interface';
import { IOffer } from 'src/app/core/models/offersList.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { OffersService } from 'src/app/core/services/offers/offers.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import Swal from 'sweetalert2';
import { RejecttOfferComponent } from './rejectt-offer/rejectt-offer.component';
import { GetCasesService } from 'src/app/core/services/cases/get-cases.service';
@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit, OnDestroy {
 
  private readonly destroy$ = new Subject<void>();
  offersList: IOffer[] = [];
  ownerCases: ICase[] = [];
  isApproved = false;
  isProcessing = false;
  buttonText = 'Generate Contract';
  combinedCaseList!: { caseName: string; caseUUID: string; offers: IOffer[] }[];
  rejectButtonText:string = 'Reject';
  loading:boolean=false;
  constructor(
    private _sharedService: SharedService,
    private _offerService: OffersService,
    private _alert: AlertsService,
    private router: Router,
    private _getCases:GetCasesService,
    private modalService: NgbModal,
  ) {}
  ngOnInit(): void {
    this.getOwnerCases();
    this._sharedService.refreshOffers$.subscribe(data=>this.getOwnerCases())
  }

  getOffersList() {
    this.loading=true
    this._offerService.getRecievedOffers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.offersList = data['result'];
        this.getCombinedList();
      });
  }


  getOwnerCases() {
    this.loading=true;
    this._getCases.getOwnerCases()
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.ownerCases = data['result'].filter((caseItem:ICase) => caseItem.status === 'PUBLISHED');
      this.loading=false;
      this.getOffersList();
    });
  }
  
  viewProfile(event: Event, userName: string) {
    window.open(`/user-profile/${userName}/up-overview/`, '_blank');
    event.stopPropagation();
  }

  generateContract(
    event: Event,
   offer:IOffer,
  ): void {
    event.stopPropagation();
    if (status !== 'CONTRACT_GENERATED' && status !== 'ACCPETD') {
      Swal.fire({
        title: 'Generate Contract?',
        text: `By proceeding, the system will create a contract for your case with the selected participant (${offer.participantInfo.instituteName}). Do you wish to continue?`,
        showCancelButton: true,
        confirmButtonColor: '#009042',
        cancelButtonColor: '#d6d6d6',
        confirmButtonText: 'Generate',
        cancelButtonText: 'Cancel',
      }).then((result: any) => {
        if (result.isConfirmed) {
       offer.isProcessing=true;
          this._offerService
            .generateContract(offer.offerId, offer.offerUUID)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: (res: any) => {
                if (res.status.code === '0') {
                  Swal.fire({
                    title: 'Generating Contract',
                    text: 'Please Wait',
                    timer: 5000,
                    didOpen: () => {
                      Swal.showLoading();
                    },
                  }).then((timerResult: any) => {
                    offer.isProcessing = false
                    this.isApproved = true;
                    this.buttonText = 'Contract Generated';
                    const contractUUID = res['result'].uuid;
                    this.router.navigate([
                      `contracts-main/contract/${contractUUID}`,
                    ]);
                    if (timerResult.dismiss === 'timer') {
                    }
                  });
                } else {
                  this._alert.error('', `${res.status.description}`);
                  offer.isProcessing = false
                  this.isApproved = false;
                  this.buttonText = 'Generate Contract';
                  return;
                }
              },
              error: (error: any) => {
                this._alert.error('', 'An error occurred.');
                this.isProcessing = false;
              },
            });
        }
      });
    }
  }
  //lookup Object
  getCombinedList() {
    const lookupCase: {
      [key: string]: { caseName: string; caseUUID: string; offers: IOffer[] };
    } = {};
    this.ownerCases.forEach((caseItem) => {
      lookupCase[caseItem.uuid] = {
        caseName: caseItem?.name,
        caseUUID: caseItem.uuid,
        offers: [],
      };
    });

    this.offersList.forEach((offer) => {
      if (lookupCase[offer.caseUUID]) {
        lookupCase[offer.caseUUID].offers.push(offer);
      }
    });

    this.combinedCaseList = Object.values(lookupCase);
    this.combinedCaseList.sort((a, b) => {
      const latestModifiedA = a.offers.reduce((latest, offer) => {
        const modifiedDate = new Date(offer.modifiedDate).getTime();
        return modifiedDate > latest ? modifiedDate : latest;
      }, 0); // Initial date: 1970-01-01
  
      const latestModifiedB = b.offers.reduce((latest, offer) => {
        const modifiedDate = new Date(offer.modifiedDate).getTime();
        return modifiedDate > latest ? modifiedDate : latest;
      }, 0);
  
      return latestModifiedB - latestModifiedA; // Descending order
    });
    this.loading=false;
    console.log('this.combinedCaseLis', this.combinedCaseList)
  }

  rejectOffer(event:Event, offer:IOffer){
    event.stopPropagation();
     const modalRef =   this.modalService.open(RejecttOfferComponent);
      modalRef.componentInstance.offerUUID = offer.offerUUID
      modalRef.componentInstance.caseName = offer.caseInfo.name

  }

  viewContract(event:Event,caseUUID:any){
    event.stopPropagation();
   this.router.navigateByUrl(`/contracts-main/contract/${caseUUID}?amParti44=true`);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

