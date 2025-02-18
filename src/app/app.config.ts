import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (Home)
  { path: 'projects', component: ProjectsComponent } // Projects page
];

export const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};
