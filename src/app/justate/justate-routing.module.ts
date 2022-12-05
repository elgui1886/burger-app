import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  template: '<section><router-outlet></router-outlet></section>',
})
export class JustateMainComponent  {
}

const routes: Routes = [
  // When app grow, i will redirect to some kind of homepage
  // Now i will redirect to Hamburger module 
  {
    path: '', component: JustateMainComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'hamburger'
      },
      {
        path: 'hamburger',
        loadChildren: () => import('./hamburger/hamburger.module').then(hamburger => hamburger.HamburgerModule)
      },
    ]
  },

];


@NgModule({
  declarations: [JustateMainComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustateRoutingModule {}
