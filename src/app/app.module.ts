import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignService } from './campaign/campaign.service';
import { DecimalPipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterCampaignsPipe } from './campaign/filter-campaigns.pipe';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterCampaignsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatTableModule,
    MatSidenavModule
  ],
  providers: [CampaignService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
