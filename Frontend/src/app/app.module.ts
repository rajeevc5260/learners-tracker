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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
