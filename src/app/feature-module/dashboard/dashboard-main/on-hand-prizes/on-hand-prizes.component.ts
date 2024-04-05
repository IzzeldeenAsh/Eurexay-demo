import { Component, Input } from '@angular/core';
import { IPrize } from 'src/app/core/models/prizes.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-on-hand-prizes',
  templateUrl: './on-hand-prizes.component.html',
  styleUrls: ['./on-hand-prizes.component.scss']
})
export class OnHandPrizesComponent {

 @Input() inHandPrizes:IPrize[]=[];
 viewProfile(event:Event,userName:string | null){
  event.stopPropagation();
  if (userName){
    const user=userName
  window.open(`/user-profile/${user}/up-overview/`, '_blank');
  }
}
notAvailable(){
  Swal.fire({
    title: '',
    text: 'This Feature is not available yet.',
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#bebebe',
    showConfirmButton:false
  })
}

}
