export enum BreadType {
    Classic = 'Classico',
    Integral = 'Integrale',
    RiceFlour = 'Farina di riso'
}
export enum MeatType {
    Beef = 'Manzo',
    GlutenFree = 'Gluten free',
    Chicken = 'Pollo',
    Vegetable = 'Vegetale'
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