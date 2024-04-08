import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: CvComponent },
];
