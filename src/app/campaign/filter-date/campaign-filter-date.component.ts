// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-campaign-filter-date',
//   templateUrl: './filter-date-index.html',
//   styleUrls: ['./filter-date-component.sass']
// })
// export class CampaignFilterDateComponent {
//   @Output() filterChanged = new EventEmitter<{ searchTerm: string, startDate: Date | null, endDate: Date | null }>();
//   searchTerm: string = '';
//   startDate: Date | null = null;
//   endDate: Date | null = null;

//   onFilterChanged() {
//     this.filterChanged.emit({ searchTerm: this.searchTerm, startDate: this.startDate, endDate: this.endDate });
//   }
// }
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-filter-date',
  templateUrl: './campaign-filter-date.component.html',
  styleUrls: ['./campaign-filter-date.component.sass']
})
export class CampaignFilterDateComponent {
  @Output() filterChanged = new EventEmitter<{ startDate: Date | null, endDate: Date | null }>();
  startDate: Date | null = null;
  endDate: Date | null = null;

  filterCampaigns() {
    this.filterChanged.emit({ startDate: this.startDate, endDate: this.endDate });
  }
}
