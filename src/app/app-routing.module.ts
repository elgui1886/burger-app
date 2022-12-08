import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hamburger',
  },
  {
    // Default redirect to my application 
    path: 'hamburger', loadChildren: () => import('./hamburger/hamburger.module').then(m => m.HamburgerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
