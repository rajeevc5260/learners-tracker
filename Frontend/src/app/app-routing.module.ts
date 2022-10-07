import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LearnersAnalyticsComponent } from './Components/learners-analytics/learners-analytics.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardSidenavComponent } from './Components/dashboard-sidenav/dashboard-sidenav.component';
import { AdminSettingsComponent } from './Components/admin-settings/admin-settings.component';
import { PlacementsComponent } from './Components/placements/placements.component';
import { DashboardContentComponent } from './Components/dashboard-content/dashboard-content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardSidenavComponent,
    children: [
      { path: 'dashboardContent', component: DashboardContentComponent},
      { path: 'learnersAnalytics', component: LearnersAnalyticsComponent},
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
