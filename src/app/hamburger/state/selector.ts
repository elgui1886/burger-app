import { createSelector } from '@ngrx/store';
import { Order } from '../models/order';
 
 
export const selectOrder = (state: object) => {
    const featureState = state as {order: Order};
    return featureState.order;
};
