import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LearnersAnalyticsComponent } from './Components/learners-analytics/learners-analytics.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardSidenavComponent } from './Components/dashboard-sidenav/dashboard-sidenav.component';
import { AdminSettingsComponent } from './Components/admin-settings/admin-settings.component';
import { PlacementsComponent } from './Components/placements/placements.component';
import { DashboardContentComponent } from './Components/dashboard-content/dashboard-content.component';
import { AddTrainerheadComponent } from './Components/add-trainerhead/add-trainerhead.component';
import { AddPlacementofficerComponent } from './Components/add-placementofficer/add-placementofficer.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', redirectTo: 'dashboard/dashboardContent', pathMatch:'full' },
  {
    path: 'dashboard',
    component: DashboardSidenavComponent,
    canActivate :[AuthGuard],
    children: [
      { path: 'dashboardContent', component: DashboardContentComponent},
      { path: 'learnersAnalytics', component: LearnersAnalyticsComponent, canActivate :[AuthGuard], },
      {
        path: 'adminSettings',
        component: AdminSettingsComponent, canActivate :[AuthGuard],
        children: [
          { path: 'tarinerHeadFrm', component: AddTrainerheadComponent},
          { path: 'placementOfficerFrm', component: AddPlacementofficerComponent },

        ],
      },
      { path: 'placements', component: PlacementsComponent, canActivate :[AuthGuard], },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
