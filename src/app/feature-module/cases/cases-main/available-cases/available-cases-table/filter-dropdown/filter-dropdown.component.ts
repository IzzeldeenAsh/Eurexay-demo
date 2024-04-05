import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss']
})
export class FilterDropdownComponent {
  @Output() applyFilter = new EventEmitter();
  @Output() applyFilterSearchInput = new EventEmitter();
  status!:any;
  budget!:any;
  searchTerm:string='';
  expiryDate!:any;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) {}

  ngOnInit(): void {
this.getQueryParams()
  }

  getQueryParams() {
    this.activatedRoute.queryParams.subscribe(params => {

        // Apply filters
        if (params['status']) {
          this.status = params['status']
        }
        if (params['budget']) {
         this.budget = params['budget']
        }
        if (params['expiryDate']) {
          this.expiryDate = params['expiryDate']
        }if (params['reset']) {
          this.status = 'all'
          this.budget = null
          this.expiryDate = null
        }

    });
}

  onApply(){
    this.searchTerm =''
    this.router.navigate(['/cases-main/available-Cases'],{queryParams:{'status':this.status, 'budget':this.budget,'expiryDate':this.expiryDate}})
  }
  applyFilterSearch(){
     this.applyFilterSearchInput.emit(this.searchTerm)
  }

  reset(){
  this.searchTerm =''
  this.applyFilterSearchInput.emit(this.searchTerm)
   this.router.navigate(['/cases-main/available-Cases'],{queryParams:{reset:true}})
  }
}
