// import { Component, OnInit } from '@angular/core';
// import { Campaign } from './campaign.model';
// import { CampaignService } from './campaign.service';
// import { faXmark, faCheck, faBarsFilter } from '@fortawesome/sharp-solid-svg-icons';
// import { DatePipe } from '@angular/common';
// import type { IconProp } from '@fortawesome/fontawesome-svg-core';

// @Component({
//   selector: 'app-campaign',
//   templateUrl: './campaign.component.html',
//   styleUrls: ['./campaign.component.sass'],
//   providers: [DatePipe]
// })
// export class CampaignComponent implements OnInit {
//   displayedColumns: string[] = ['name', 'startDate', 'endDate', 'budget'];
//   campaigns: Campaign[] = [];
//   filteredCampaigns: Campaign[] = [];
//   searchTerm: string = '';
//   startDate: Date | null = null;
//   endDate: Date | null = null;
//   faCheck: IconProp = faCheck;
//   faBarsFilter: IconProp = faBarsFilter;
//   faXmark: IconProp = faXmark;

//   constructor(private campaignService: CampaignService, private datePipe: DatePipe) { }

//   // ngOnInit() {
//   //   this.campaigns = this.campaignService.getCampaigns();
//   //   this.filteredCampaigns = this.campaigns;
//   // }
//   ngOnInit() {
//     this.campaigns = this.campaignService.getCampaigns();
//     this.campaignService.getCampaignsUpdatedListener().subscribe(campaigns => {
//       this.campaigns = campaigns;
//     });
//     this.filteredCampaigns = this.campaigns;
//   }

//   filterCampaigns() {
//     this.filteredCampaigns = this.campaigns.filter((campaign) => {
//       if (this.startDate && this.endDate) {
//         return campaign.startDate >= this.startDate && campaign.endDate <= this.endDate;
//       }
//       return true;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Campaign } from './campaign.model';
import { CampaignService } from './campaign.service';
import { faXmark, faCheck, faBarsFilter } from '@fortawesome/sharp-solid-svg-icons';
import { DatePipe } from '@angular/common';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.sass'],
  providers: [DatePipe]
})
export class CampaignComponent implements OnInit {
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'budget'];
  campaigns: Campaign[] = [];
  filteredCampaigns: Campaign[] = [];
  searchTerm: string = '';
  startDate: Date | null = null;
  endDate: Date | null = null;
  faCheck: IconProp = faCheck;
  faBarsFilter: IconProp = faBarsFilter;
  faXmark: IconProp = faXmark;

  constructor(private campaignService: CampaignService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.campaigns = this.campaignService.getCampaigns();
    this.campaignService.getCampaignsUpdatedListener().subscribe(campaigns => {
      this.campaigns = campaigns;
      this.filterCampaigns();
    });
    this.filteredCampaigns = this.campaigns;
  }

  filterCampaigns() {
    this.filteredCampaigns = this.campaigns.filter((campaign) => {
      const isStartDateValid = !this.startDate || campaign.startDate >= this.startDate;
      const isEndDateValid = !this.endDate || campaign.endDate <= this.endDate;
      const isSearchTermValid = campaign.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      return isStartDateValid && isEndDateValid && isSearchTermValid;
    });
  }
}
