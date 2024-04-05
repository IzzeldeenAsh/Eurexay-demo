import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreatePrize } from 'src/app/core/models/create-prize';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { IPrize } from 'src/app/core/models/prizes.interface';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component extends AppComponentBase  implements OnInit  {
  selectedItems!: any[];
  selectedCountries!:any[]
  selectAll = false;
  selectAllCountries = false;
  continents: any[] = [
    { label: 'Africa', value: 'africa' },
    { label: 'Antarctica', value: 'antarctica' },
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'North America', value: 'northAmerica' },
    { label: 'Oceania', value: 'oceania' },
    { label: 'South America', value: 'southAmerica' }
];
  @Input('updateParentModel') updateParentModel!: (
    part: Partial<ICreatePrize>,
    isFormValid: boolean
  ) => void;
  form!: FormGroup;
  @Input() prizeEdit!:IPrize;
  @Input() defaultValues!: Partial<ICreatePrize>;
    countriesList:any;
  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {
   super();
  }

  ngOnInit() {
    
    this.initForm();
    this.handleAlreadySelectedCountries()
    this.updateParentModel({}, this.checkForm());
    this.updateParentModel(this.form.value,this.checkForm());

  }

  handleAlreadySelectedCountries(){
    const countriesSelected:string[] = this.countriesSelected.value;
    const listOfSelectedContinents:string[]= this.countriesLocalAPI.filter((c)=>countriesSelected.includes(c.name)).map((c)=>c.continent)
    if(countriesSelected.length){
     this.selectedItems= this.continents.filter(continent=>listOfSelectedContinents.includes(continent.label))
      this.countriesList = this.countriesLocalAPI.filter(c=>listOfSelectedContinents.includes(c.continent));
      this.selectedCountries = this.countriesLocalAPI.filter(c=>countriesSelected.includes(c.name))
    }else{
      this.continentsSelected.setValue([])
      this.selectedCountries=[];
      
    }
  }

  onSelectAllChange(event:any) {
    this.selectedItems = event.checked ? [...this.continents] : [];
    this.selectAll = event.checked;
    this.countriesList = this.countriesLocalAPI;
    if(this.selectAll) {
      this.countriesList = this.countriesLocalAPI ;
    }else{ 
      this.countriesList=[];
      this.selectedCountries=[];
      }
    const selectedContinents = this.selectedItems.map(c=>c.label)
    this.continentsSelected.setValue(selectedContinents);
}

onChange(event:any) {
    const { originalEvent, value } = event
    if(value) this.selectAll = value.length === this.continents.length;
   const selectedContinents = this.selectedItems.map(c=>c.label)
   this.continentsSelected.setValue(selectedContinents)
    this.countriesList = this.countriesLocalAPI.filter((c)=>selectedContinents.includes(c.continent));
    this.selectedCountries = this.selectedCountries.filter(c => selectedContinents.includes(c.continent));

}
onSelectAllChangeCountries(event:any) {
  this.selectedCountries = event.checked ? [...this.countriesLocalAPI] : [];
  this.selectAllCountries = event.checked;
  const selectedCountries = this.selectedCountries.map(c=>c.name);
  this.countriesSelected.setValue(selectedCountries);
}

onChangeCountries(event:any) {
  const { originalEvent, value } = event
  if(value) this.selectAllCountries = value.length === this.countriesLocalAPI.length;
  const selectedCountries = this.selectedCountries.map(c=>c.name);
  this.countriesSelected.setValue(selectedCountries);
}

  initForm() {
    this.form = this.fb.group({
      limitParticipants: [this.prizeEdit ? this.prizeEdit.limited : this.defaultValues.limitParticipants,Validators.required],
      isPublic: [this.prizeEdit ? this.prizeEdit.publicPrize :this.defaultValues.isPublic,Validators.required],
      participantsNumber: [this.prizeEdit ? this.prizeEdit.allowedParticipantNumber : this.defaultValues.participantsNumber],
      // whoCanParticipate:[this.defaultValues.whoCanParticipate],
      countriesSelected: [this.prizeEdit ? this.prizeEdit.allowedCountries : this.defaultValues.countriesSelected],
      continentsSelected:[ this.defaultValues.continentsSelected]

    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());

    });
    this.unsubscribe.push(formChangesSubscr);
  }
get countriesSelected(){
  return this.form.get('countriesSelected') as FormControl
}
get continentsSelected(){
  return this.form.get('continentsSelected') as FormControl
}
get isPublic(){
  return this.form.get('isPublic') as FormControl
}
get limitParticipants(){
  return this.form.get('limitParticipants') as FormControl
}
get participantsNumber(){
  return this.form.get('participantsNumber') as FormControl
}


  checkForm() {
    return (
   this.checkPublic() 
    );
  }

  checkPublic(): boolean{
    if( this.isPublic.value === false ){
     return this.countriesSelected.value.length ==0 ? false :true 
    } else{
      return  true
    }
  }

  checkPublicity(){
   if(this.isPublic.value === true){
    this.selectedItems=[];
    this.continentsSelected.setValue([]);
    this.selectedCountries=[];
    this.countriesSelected.setValue([])
   }
  }

  checkParicipantLimitaions(): boolean{
    if( this.limitParticipants.value === true ){
     return this.participantsNumber.value.length ==0 ? true :false 
    } else{
      return  false
    }
  }
  
  

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
