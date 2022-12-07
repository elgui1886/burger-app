import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HambugerOrderComponent } from './hambuger-order/hambuger-order.component';

@Component({
  template: '<section><router-outlet></router-outlet></section>',
})
export class HamburgerMainComponent  {
}

const routes: Routes = [
  // Hamburger module - it could have more section: now only order
  {
    path: '', component: HamburgerMainComponent,
    children: [
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      {
        path: 'order',
        component: HambugerOrderComponent
      }
    ]
  },

];

@NgModule({
  declarations: [HamburgerMainComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HamburgerRoutingModule {}
