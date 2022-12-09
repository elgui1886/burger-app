import { createSelector } from '@ngrx/store';
import {
  pipe,
  scan,
  filter,
} from 'rxjs';
import { Order } from '../models/order';

const selectOrder = (state: { order: Order }) => {
  return state.order;
};

export const orderStateSelector = createSelector(selectOrder, (s) => s);

export const pipeableOrders = () => {
  return (  
    pipe(
    filter((order: Order) => {
      return order.tableNumber > 0 && order.quantity > 0}),
    scan((acc: Order[], current: Order) => {
      acc.push(current);
      return acc;
    }, []))
  );
};
