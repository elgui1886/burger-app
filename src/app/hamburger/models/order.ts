import { Hamburger } from './hamburger';

export interface Order {
    tableNumber: number ;
    quantity: number;
    burgers: Hamburger[]
}