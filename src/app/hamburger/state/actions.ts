import { createAction, props } from '@ngrx/store';
import { Order } from '../models/order';

export const order = createAction(
  '[Hamburger-order Component] order',
  props<{ order: Order }>()
);
