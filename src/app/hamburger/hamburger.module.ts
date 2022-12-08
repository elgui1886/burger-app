import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerRoutingModule } from './hamburger-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HambugerOrderComponent } from './hambuger-order/hambuger-order.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { actionReducer } from './state/reducer';
@NgModule({
  declarations: [HambugerOrderComponent],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    // Materials
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSnackBarModule,
    
    // App
    HamburgerRoutingModule,

    // Ngrx
    StoreModule.forFeature('order', actionReducer)
  ],
  exports: [HamburgerRoutingModule],
})
export class HamburgerModule {}
