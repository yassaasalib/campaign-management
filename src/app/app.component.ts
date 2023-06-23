import { Component } from '@angular/core';
import { CampaignService } from './campaign/campaign.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./campaign/campaign.component.sass']
  // styleUrls: ['./campaign/campaign.component.sass']
})
export class AppComponent {
  title = 'campaign-management';
  searchTerm: string = '';
  constructor(private campaignService: CampaignService) {}

  onSearchChanged(term: string) {
    const startDate: Date | null = null; // Provide the start date
    const endDate: Date | null = null; // Provide the end date
    this.searchTerm = term;
    this.campaignService.searchCampaigns(term, startDate, endDate);
  }
  
}
