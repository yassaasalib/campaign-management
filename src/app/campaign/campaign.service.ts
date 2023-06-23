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

  searchCampaigns(searchTerm: string, startDate: Date | null, endDate: Date | null) {
    const filteredCampaigns = this.campaigns.filter((campaign) => {
      const campaignStartDate = new Date(campaign.startDate);
      const campaignEndDate = new Date(campaign.endDate);
      
      const isWithinDateRange = (!startDate || campaignStartDate >= startDate) && (!endDate || campaignEndDate <= endDate);
      const hasSearchTerm = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());

      return isWithinDateRange && hasSearchTerm;
    });

    this.campaignsUpdated.next(filteredCampaigns);
  }
}
