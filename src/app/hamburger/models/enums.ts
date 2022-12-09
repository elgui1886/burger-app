export enum BreadType {
    Classic = 'Classico',
    Integral = 'Integrale',
    RiceFlour = 'Farina di riso'
}
export enum MeatType {
    Chicken = 'Pollo',
    Vegetable = 'Vegetale',
    Beef = 'Manzo',
    GlutenFree = 'Gluten free'
}
export enum Ingredients {
    Lettuce = 'Lattuga',
    Cheddar = 'Cheddar',
    Ketchup = 'Ketchup',
    Maionese = 'Maionese',
    Onion = 'Cipolla'
}


export const BREADS = Object.values(BreadType);
export const MEATS  = Object.values(MeatType);
export const INGREDIENTS = Object.values(Ingredients);