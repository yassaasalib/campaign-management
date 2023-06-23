import { Pipe, PipeTransform } from '@angular/core';
import { Campaign } from './campaign.model';

@Pipe({
  name: 'filterCampaigns',
})
export class FilterCampaignsPipe implements PipeTransform {
  transform(campaigns: Campaign[], startDate: Date | null, endDate: Date | null): Campaign[] {
    if (startDate && endDate) {
      return campaigns.filter((campaign) => {
        const campaignStartDate = new Date(campaign.startDate);
        const campaignEndDate = new Date(campaign.endDate);
        return campaignStartDate >= startDate && campaignEndDate <= endDate;
      });
    }
    return campaigns;
  }
}
