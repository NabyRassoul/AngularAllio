import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FidelityProgramComponent } from 'src/app/pages/fidelity-program/fidelity-program.component';
import { ProspectusComponent } from 'src/app/pages/prospectus/prospectus.component';
import { BonsComponent } from 'src/app/pages/bons/bons.component';
import { CampagnesComponent } from 'src/app/pages/campagnes/campagnes.component';
import { AddBonComponent } from 'src/app/pages/bons/add-bon/add-bon.component';
import { ViewBonComponent } from 'src/app/pages/bons/view-bon/view-bon.component';
import { DeleteBonComponent } from 'src/app/pages/bons/delete-bon/delete-bon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProspectComponent } from 'src/app/pages/prospectus/add-prospect/add-prospect.component';
import { ViewProspectComponent } from 'src/app/pages/prospectus/view-prospect/view-prospect.component';
import { DeleteProspectComponent } from 'src/app/pages/prospectus/delete-prospect/delete-prospect.component';
import { AddCampagnComponent } from 'src/app/pages/campagnes/add-campagn/add-campagn.component';
import { ViewCampagnComponent } from 'src/app/pages/campagnes/view-campagn/view-campagn.component';
import { DeleteCampagnComponent } from 'src/app/pages/campagnes/delete-campagn/delete-campagn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    IconsComponent,
    NotificationsComponent,
    BonsComponent,
    CampagnesComponent,
    ProspectusComponent,
    FidelityProgramComponent,
    AddBonComponent,
    ViewBonComponent,
    DeleteBonComponent,
    AddProspectComponent,
    ViewProspectComponent,
    DeleteProspectComponent,
    AddCampagnComponent,
    ViewCampagnComponent,
    DeleteCampagnComponent
  ]
})
export class AdminLayoutModule {}
