import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [DashboardComponent, PagesComponent, AccountSettingsComponent],
  exports: [DashboardComponent, PagesComponent, AccountSettingsComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class PagesModule {}
