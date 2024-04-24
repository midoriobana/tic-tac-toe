import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'modulo1',
    loadChildren: async () =>
      (await import('./core/home-page/home-page.module')).HomePageModule,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
