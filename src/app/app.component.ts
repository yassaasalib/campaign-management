import { Component, OnInit } from '@angular/core';
import { CampaignService } from './campaign/campaign.service';
import { SidebarService } from './shared/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'campaign-management';
  searchTerm: string = '';
  isSidePanelOpen = false;
  startDate: Date | null = null;
  endDate: Date | null = null;
  
  constructor(private campaignService: CampaignService, private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isOpen$.subscribe(isOpen => {
      this.isSidePanelOpen = isOpen;
    });
  }

  onSearchChanged(term: string) {
    this.searchTerm = term;
    this.filterCampaigns();
  }

  filterCampaigns() {
    this.campaignService.filterCampaigns(this.searchTerm, this.startDate, this.endDate);
  }

  toggleSidePanel() {
    this.sidebarService.toggleSidebar();
  }
}
