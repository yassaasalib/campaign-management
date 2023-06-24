import { Component } from '@angular/core';
import { CampaignService } from './campaign/campaign.service';
import { SidebarService } from './shared/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'campaign-management';
  searchTerm: string = '';
  isSidePanelOpen = false;
  
  constructor(private campaignService: CampaignService, private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isOpen$.subscribe(isOpen => {
      this.isSidePanelOpen = isOpen;
    });
  }
  onSearchChanged(term: string) {
    const startDate: Date | null = null; // Provide the start date
    const endDate: Date | null = null; // Provide the end date
    this.searchTerm = term;
    this.campaignService.searchCampaigns(term, startDate, endDate);
  }
}
