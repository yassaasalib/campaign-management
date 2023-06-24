import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CampaignComponent } from './campaign.component';
import { CampaignRoutingModule } from './campaign.routes';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
	declarations: [CampaignComponent],
	entryComponents: [],
	imports: [
		CommonModule,
		MatIconModule,
		CampaignRoutingModule,
		FontAwesomeModule,
		FormsModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatFormFieldModule,
		MatInputModule
	],
	exports: [],
	providers: [],
})
export class Module {}
