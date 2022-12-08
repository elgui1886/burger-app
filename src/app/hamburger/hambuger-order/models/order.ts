import { Hamburger } from './hamburger';
import { FormControl } from "@angular/forms";

export interface Order {
    tableNumber: number;
    quantity: number;
    hamburgers: Hamburger[]
}