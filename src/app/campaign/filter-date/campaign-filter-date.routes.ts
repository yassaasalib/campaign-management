import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignFilterDateComponent } from './campaign-filter-date.component';

const routes: Routes = [
	{
		path: '',
		component: CampaignFilterDateComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutingModule { }
