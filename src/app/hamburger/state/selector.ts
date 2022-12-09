import { createSelector } from '@ngrx/store';
import { pipe, scan } from 'rxjs';
import { Order } from '../models/order';

const selectOrder = (state: { order: Order }) => {
  return state.order;
};

export const orderSelector = createSelector(
  selectOrder,
  (state: Order) => state
);

export const orderSelectors = () => {
  return pipe(
    scan((acc: Order[], current: Order) => {
      acc.push(current);
      return acc;
    }, [])
  );
};
