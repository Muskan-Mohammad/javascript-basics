 import readline from  'readline-sync';
 import showerror from './showerror.js';

const BURGER_ITEM = [
    'Veg Cheese Burger    = 70',
    'Veg Burger           = 50',
    'Chicken Burger       = 90',
    'Spicy Chicken Burger = 100',
    'Double Loded Chicken Burger = 120'
];

const PIZZA_ITEM = [
    'Veg Margerita        = 100',
    'Veg Panner cheese Pizza = 120',
    'Veg Onion & Capsicum    = 90',
    'Ckicken Pizza           = 140',
    'Lamb Pizza with extra spicy = 200'
];


const PASTA_ITEM = [
    'Plain Pasta    = 100',
    'Red Sauce Pasta = 150',
    'White Sauce Pasta = 140',
    
];

const DRINKS_ITEMS = [
    'Tea       = 20',
    'Coffee      = 30',
    'Any Milkshakes = 50',
    'SoftDrinks     = 40'
];


const MENU_ITEMS = {
   'Pizza': PIZZA_ITEM,
   'Pasta' : PASTA_ITEM,
     'Burger': BURGER_ITEM,
    'Drinks': DRINKS_ITEMS
};


// export function MenuItem(category){
// const itemsMenu = MENU_ITEMS[category];
// if(itemsMenu){
//     const menuItemIndex = readline.keyInSelect(itemsMenu);
//     const selectedItem = itemsMenu[menuItemIndex];
//     return selectedItem;
// } else {
//     showerror()
// }
// }

const items = readline.keyInSelect(MENU_ITEMS);
console.log(items)


