import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { Order } from '../models/order';
import * as OrderActions from './actions';

export const initialStateOrder: Order = {
  quantity: 0,
  tableNumber: 0,
  burgers: [],
};

export const actionReducer = createReducer(
  initialStateOrder,
  on(OrderActions.order, (state, { order }) => {
    return { ...state, ...order };
  })
);
