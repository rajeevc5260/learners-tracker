import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule  } from "@angular/material/tabs";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DashboardHeaderComponent } from './Components/dashboard-header/dashboard-header.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardSidenavComponent } from './Components/dashboard-sidenav/dashboard-sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardContentComponent } from './Components/dashboard-content/dashboard-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LearnersAnalyticsComponent } from './Components/learners-analytics/learners-analytics.component';
import { AdminSettingsComponent } from './Components/admin-settings/admin-settings.component';
import { PlacementsComponent } from './Components/placements/placements.component';
import { AddCandidatesComponent } from './Components/add-candidates/add-candidates.component';
import { LearnerUpdateComponent } from './Components/learner-update/learner-update.component';
import { UploadFileComponent } from './Components/upload-file/upload-file.component';
import { AddPlacementofficerComponent } from './Components/add-placementofficer/add-placementofficer.component';
import { AddTrainerheadComponent } from './Components/add-trainerhead/add-trainerhead.component';
import { UpdateTrainerheadComponent } from './Components/update-trainerhead/update-trainerhead.component';
import { UpdatePlacementofficerComponent } from './Components/update-placementofficer/update-placementofficer.component';
import { UpdatePlacementstatusComponent } from './Components/update-placementstatus/update-placementstatus.component';
import { AuthService } from './Services/auth.service';
import { LearnersDataService } from './Services/learners-data.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { POroleGuard } from './porole.guard';
import { ThSidenavComponent } from './Components/dashboard-sidenav/side/th-sidenav/th-sidenav.component';
import { PoSidenavComponent } from './Components/dashboard-sidenav/side/po-sidenav/po-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardHeaderComponent,
    LoginComponent,
    DashboardSidenavComponent,
    DashboardContentComponent,
    LearnersAnalyticsComponent,
    AdminSettingsComponent,
    PlacementsComponent,
    AddCandidatesComponent,
    LearnerUpdateComponent,
    UploadFileComponent,
    AddPlacementofficerComponent,
    AddTrainerheadComponent,
    UpdateTrainerheadComponent,
    UpdatePlacementofficerComponent,
    UpdatePlacementstatusComponent,
    ThSidenavComponent,
    PoSidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [AuthService, AuthGuard, LearnersDataService, POroleGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
