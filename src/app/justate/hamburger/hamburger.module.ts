import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerRoutingModule } from './hamburger-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HamburgerRoutingModule
  ],
  exports: [HamburgerRoutingModule]
})
export class HamburgerModule { }
