import {
  Component,
  Output,
  EventEmitter,
  ElementRef,
  OnInit,
} from '@angular/core';
import { AppComponentBase } from 'src/app/shared/app-component-base';
@Component({
  selector: 'app-custom-dropdown-countries',
  templateUrl: './custom-dropdown-countries.component.html',
  styleUrls: ['./custom-dropdown-countries.component.scss'],
})
export class CustomDropdownCountriesComponent extends AppComponentBase implements OnInit{
  @Output() countrySelected = new EventEmitter<any>();
  @Output() countryDeselected = new EventEmitter<any>();
  selectedCountry:any;
  filterdCountres:string[]=[]
  constructor(private elementRef: ElementRef) {
    super();
    this.countriesLocalAPI
  }
  countries: any[] | undefined;


  ngOnInit() {
  }
  onCountrySelect(): void {
if(this.selectedCountry){
  const obj={
   country:this.selectedCountry.name,
   continent:this.selectedCountry.continent,
   dial:this.selectedCountry.dial_code
 }
   this.countrySelected.emit(obj);
}
  
  }
}
