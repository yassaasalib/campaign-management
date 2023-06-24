// import { NgModule } from '@angular/core';
// import { CampaignFilterDateComponent } from './campaign-filter-date.component';
// import { RoutingModule } from './campaign-filter-date.routes';

// @NgModule({
// 	declarations: [ CampaignFilterDateComponent ],
// 	imports: [ RoutingModule ],
// 	providers: [],
// })
// export class Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CampaignFilterDateComponent } from './campaign-filter-date.component';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [CampaignFilterDateComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
	MatInputModule,
	MatNativeDateModule
  ],
  exports: [CampaignFilterDateComponent]
})
export class CampaignFilterDateModule { }
