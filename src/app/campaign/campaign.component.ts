import { Component, OnInit } from '@angular/core';
import { CampaignService } from './campaign.service';
import { Campaign } from './campaign.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.sass'],
  providers: [DatePipe]
})
export class CampaignComponent implements OnInit {
  campaigns: Campaign[] = [];
  searchTerm: string = '';

  constructor(public campaignService: CampaignService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.campaigns = this.campaignService.getCampaigns();
    this.campaignService.getCampaignsUpdatedListener().subscribe(campaigns => {
      this.campaigns = campaigns;
    });
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'MM/dd/yyyy') || '';
  }

  isActive(campaign: Campaign) {
    let today = new Date();
    let startDate = new Date(campaign.startDate);
    let endDate = new Date(campaign.endDate);

    return today >= startDate && today <= endDate;
  }

  search() {
    this.campaignService.searchCampaigns(this.searchTerm);
  }
}