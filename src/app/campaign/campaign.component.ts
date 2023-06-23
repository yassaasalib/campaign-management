import { Component, OnInit } from '@angular/core';
import { Campaign } from './campaign.model';
import { CampaignService } from './campaign.service';
import { faXmark, faCheck, faBarsFilter } from '@fortawesome/sharp-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.sass']
})
export class CampaignComponent implements OnInit {
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'budget']

  campaigns: Campaign[] = [];
  searchTerm: string = '';

	faCheck: IconProp = faCheck;
	faBarsFilter: IconProp = faBarsFilter;
	faXmark: IconProp = faXmark;

  constructor(private campaignService: CampaignService) {}

  ngOnInit() {
    this.campaigns = this.campaignService.getCampaigns();
    this.campaignService.getCampaignsUpdatedListener().subscribe(campaigns => {
      this.campaigns = campaigns;
    });
  }
}
