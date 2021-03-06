
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
// import { HorizontalLayoutComponent } from "./layouts/horizontal/horizontal-layout.component";

import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';
import { Full_ROUTES } from './shared/routes/full-layout.routes';
// import { HORIZONTAL_ROUTES } from "./shared/routes/horizontal-layout.routes";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/pages/login',
    pathMatch: 'full',
  },
  {
    path: '', component: FullLayoutComponent,
    data: { title: 'full Views' }, children: Full_ROUTES
  },
  {
    path: '', component: ContentLayoutComponent,
    data: { title: 'content Views' },
    children: CONTENT_ROUTES,
  },
  // tslint:disable-next-line:max-line-length
  // { path: '', component: HorizontalLayoutComponent, data: { title: 'horizontal Views' }, children: HORIZONTAL_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
