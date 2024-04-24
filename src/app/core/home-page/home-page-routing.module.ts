import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page.component';
import { Child1PageComponent } from './pages/child1-page/child1-page.component';
import { Child2PageComponent } from './pages/child2-page/child2-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'child1',
        component: Child1PageComponent,
      },
      {
        path: 'child2',
        component: Child2PageComponent,
      },
    ],
  },
];

export const HomePageRoutingModule = RouterModule.forChild(routes);
