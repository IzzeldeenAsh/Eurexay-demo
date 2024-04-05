import { Component } from '@angular/core';
import { CasesStatus } from 'src/app/core/enums/cases-status.enum';
interface Status {
  status: string;
}
interface Sort {
  name: string,
}
@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.scss']
})
export class SearchAndFilterComponent {
  status: Status[] | undefined;
  selectedStatus: Status | undefined;
  sorts!: Sort[];
  selectedSort!: Sort;
    ngOnInit() {
        this.status = [
            { status: CasesStatus.PUBLISHED },
            { status: CasesStatus.TAKEN },
            { status:CasesStatus.SCHEDULED },
        ];
        this.sorts = [
          { name: 'Default (No Sorting)' },
          { name: 'Name (A to Z)' },
          { name: 'Name (Z to A)'},
          { name: 'Publish Date (Oldest to Newest)'  },
          { name: 'Publish Date (Newest to Oldest)' },
          {name : 'Budget (Lowest to Highest)'},
          {name : 'Budget (Highest to Lowest)'}
      ];
    }

   
    
}
