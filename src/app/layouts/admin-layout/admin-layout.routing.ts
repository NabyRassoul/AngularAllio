import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BonsComponent } from 'src/app/pages/bons/bons.component';
import { ProspectusComponent } from 'src/app/pages/prospectus/prospectus.component';
import { FidelityProgramComponent } from 'src/app/pages/fidelity-program/fidelity-program.component';
import { CampagnesComponent } from 'src/app/pages/campagnes/campagnes.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'bons', component: BonsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'prospectus', component: ProspectusComponent },
  { path: 'campagnes', component: CampagnesComponent },
  { path: 'fidelite', component: FidelityProgramComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: UserComponent },
];
