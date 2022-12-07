import { FormControl } from "@angular/forms";
import { BreadType, Ingredients, MeatType } from "./enums";

export interface Hamburger {
    bread: BreadType,
    meat: MeatType,
    ingredients: Ingredients[],
    mediumRare?: boolean
}
