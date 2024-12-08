import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PublicationsPageComponent } from '../components/publications-page/publications-page.component';
import { ParticipationInConferencesPageComponent } from '../components/participation-in-conferences-page/participation-in-conferences-page.component';
import { ProjectsPageComponent } from '../components/projects-page/projects-page.component';
import { SupervisionPageComponent } from '../components/supervision-page/supervision-page.component';
import { WhatILikePageComponent } from '../components/what-ilike-page/what-ilike-page.component';
import { DidacticActivityPageComponent } from '../components/didactic-activity-page/didactic-activity-page.component';
import { CooperationPageComponent } from '../components/cooperation-page/cooperation-page.component';
import { OtherActivitiesPageComponent } from '../components/other-activities-page/other-activities-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'publications-page', component: PublicationsPageComponent},
    {path: 'participation-in-conferences-page', component: ParticipationInConferencesPageComponent},
    {path: 'projects-page', component: ProjectsPageComponent},
    {path: 'supervision-page', component: SupervisionPageComponent},
    {path: 'what-ilike-page', component: WhatILikePageComponent},
    {path:'didactic-activity-page', component: DidacticActivityPageComponent},
    {path:'cooperation-page', component: CooperationPageComponent},
    {path: 'other-activities-page', component: OtherActivitiesPageComponent}
];
