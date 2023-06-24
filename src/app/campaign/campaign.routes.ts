import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './campaign.component';

const routes: Routes = [
	{
		path: '',
		component: CampaignComponent,
		children: [
			{
				path: 'how',
				loadChildren: () => import('./filter-date/campaign-filter-date.module').then((m) => m.CampaignFilterDateModule),
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CampaignRoutingModule {}
