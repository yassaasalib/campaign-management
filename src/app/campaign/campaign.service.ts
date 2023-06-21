
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// import { Campaign } from './campaign.model';
// import { initialCampaigns } from './campaign-data';

// @Injectable({ providedIn: 'root' })
// export class CampaignService {
//   private campaigns: Campaign[] = [];
//   private campaignsUpdated = new Subject<Campaign[]>();

//   // Initial Campaigns


//   constructor() {
//     // this.campaigns = this.initialCampaigns;
//     this.campaignsUpdated.next([...this.campaigns]);
//   }
  
//   private campaigns: Campaign[] = [...initialCampaigns];

//   addCampaigns(newCampaigns: Campaign[]) {
//     this.campaigns = [...this.campaigns, ...newCampaigns];
//     this.campaignsUpdated.next([...this.campaigns]);
//   }

//   getCampaigns() {
//     return [...this.campaigns];
//   }

//   getCampaignsUpdatedListener() {
//     return this.campaignsUpdated.asObservable();
//   }

//   searchCampaigns(term: string) {
//     if (!term.trim()) {
//       // If not search term, return all campaigns.
//       this.campaignsUpdated.next([...this.campaigns]);
//       return;
//     }

//     const results = this.campaigns.filter(campaign => campaign.name.toLowerCase().includes(term.toLowerCase()));
//     this.campaignsUpdated.next([...results]);
//   }
// }

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Campaign } from './campaign.model';
import { initialCampaigns } from './campaign-data';

@Injectable({ providedIn: 'root' })
export class CampaignService {
  private campaigns: Campaign[] = [...initialCampaigns];
  private campaignsUpdated = new Subject<Campaign[]>();

  constructor() {
    this.campaignsUpdated.next([...this.campaigns]);
  }

  addCampaigns(newCampaigns: Campaign[]) {
    this.campaigns.push(...newCampaigns);
    this.campaignsUpdated.next([...this.campaigns]);
  }
  
  getCampaigns() {
    return [...this.campaigns];
  }

  getCampaignsUpdatedListener() {
    return this.campaignsUpdated.asObservable();
  }

  searchCampaigns(term: string) {
    if (!term.trim()) {
      // If no search term, return all campaigns.
      this.campaignsUpdated.next([...this.campaigns]);
      return;
    }

    const results = this.campaigns.filter(campaign => campaign.name.toLowerCase().includes(term.toLowerCase()));
    this.campaignsUpdated.next([...results]);
  }
}
