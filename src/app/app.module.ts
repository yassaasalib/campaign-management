import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignService } from './campaign/campaign.service';
import { DecimalPipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CampaignService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
