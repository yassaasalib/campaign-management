import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CampaignComponent } from './campaign.component';
import { CampaignRoutingModule } from './campaign.routes';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [CampaignComponent],
	entryComponents: [],
	imports: [
		CommonModule,
		CampaignRoutingModule,
		FontAwesomeModule,
		FormsModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatInputModule
	],
	exports: [],
	providers: [],
})
export class Module {}
