import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutesEnum } from './core';
import { MainLayoutComponent } from './layouts/main';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: AppRoutesEnum.Home,
        loadChildren: () => import('./pages/home').then((m) => m.HomeModule)
      },
      {
        path: '**',
        redirectTo: AppRoutesEnum.Home
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private readonly router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
