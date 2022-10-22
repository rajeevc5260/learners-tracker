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
import { POroleGuard } from './porole.guard';
import { THroleGuard } from './throle.guard';
import { ThSidenavComponent } from './Components/dashboard-sidenav/side/th-sidenav/th-sidenav.component';
import { PoSidenavComponent } from './Components/dashboard-sidenav/side/po-sidenav/po-sidenav.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', redirectTo: 'dashboard/dashboardContent', pathMatch:'full' },
  { path: 'POdashboard', redirectTo: 'POdashboard/dashboardContent', pathMatch:'full' },
  { path: 'THdashboard', redirectTo: 'THdashboard/dashboardContent', pathMatch:'full' },
  {
    path: 'dashboard',
    component: DashboardSidenavComponent,
    children: [
      { path: 'dashboardContent', component: DashboardContentComponent,canActivate:[AuthGuard]},
      { path: 'learnersAnalytics', component: LearnersAnalyticsComponent, canActivate:[THroleGuard] },
      {
        path: 'adminSettings',
        component: AdminSettingsComponent, canActivate :[AuthGuard],
        children: [
          { path: 'tarinerHeadFrm', component: AddTrainerheadComponent},
          { path: 'placementOfficerFrm', component: AddPlacementofficerComponent },

        ],
      },
      { path: 'placements', component: PlacementsComponent, canActivate :[POroleGuard]},
    ],
  },
  { path: 'POdashboard', component:PoSidenavComponent, 
  children: [
    { path: 'dashboardContent', component: DashboardContentComponent,canActivate:[AuthGuard]},

    { path: 'placements', component: PlacementsComponent, canActivate :[POroleGuard]},
  ],
},
  {path: 'THdashboard', component: ThSidenavComponent,

  children: [
    { path: 'dashboardContent', component: DashboardContentComponent,canActivate:[AuthGuard]},
    { path: 'learnersAnalytics', component: LearnersAnalyticsComponent, canActivate:[THroleGuard] },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
