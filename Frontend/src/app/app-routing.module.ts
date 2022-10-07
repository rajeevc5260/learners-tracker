import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContentComponent } from './Components/dashboard-content/dashboard-content.component';
import { DashboardHeaderComponent } from './Components/dashboard-header/dashboard-header.component';
import { HomeComponent } from './Components/home/home.component';
import { LearnersAnalyticsComponent } from './Components/learners-analytics/learners-analytics.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardSidenavComponent } from './Components/dashboard-sidenav/dashboard-sidenav.component';
import { AdminSettingsComponent } from './Components/admin-settings/admin-settings.component';
import { PlacementsComponent } from './Components/placements/placements.component';
import { AddCandidatesComponent } from './Components/add-candidates/add-candidates.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardSidenavComponent,
    children: [
      { path: 'learnersAnalytics', component: LearnersAnalyticsComponent, children:[{path: 'addCandidates', component:AddCandidatesComponent}] },
      { path: 'adminSettings', component: AdminSettingsComponent },
      { path: 'placements', component: PlacementsComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
