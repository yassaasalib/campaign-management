import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CampaignComponent } from './campaign.component';
import { CampaignRoutingModule } from './campaign.routes';

@NgModule({
	declarations: [CampaignComponent],
	entryComponents: [],
	imports: [CommonModule, CampaignRoutingModule, FontAwesomeModule],
	exports: [],
	providers: [],
})
export class Module {}
