import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
];

export const HomePageRoutingModule = RouterModule.forRoot(routes);
