import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-dropdown-2',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss']
})
export class FilterDropdownComponent  {
  @Output() applyFilter = new EventEmitter();
  status!:any;
  budget!:any;
  submissionEndDate!:any;
  constructor() {}

  ngOnInit(): void {}
  onApply(){
    const filter = {
      status:this.status,
      budget:this.budget,
      submissionEndDate:this.submissionEndDate,
      showDropDown:false
    }
    this.applyFilter.emit(filter)
  }
}
