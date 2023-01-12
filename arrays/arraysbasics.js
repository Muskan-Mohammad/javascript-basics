/*
[
  value1, // string
  value2, // number
  value3, // boolean
  value4, // null
  value5, // []
  value6, // {},
  value7, // function() {}
  value8, // () => {}
]
*/
const Item = 'HotDog';
const food = ['Pizza' , 'Burger' , 'Pasta' , 'Fruits' , 'Spagetti' , 'LavaCake' , Item];


    // console.log(food);

    food.push('Biryani');
    food.push('IceCream' , 'Coke');

   
    console.log(food);
 printTotalFood();
    console.log(food[1]);
    console.log(food[5]);

    // console.log(`Total number of food items ${food.length}`);
    console.log(food[food-3]);

    food[4] = 'PanCake';
    console.log(food);

    function printTotalFood(){
        console.log(` The total food is ${food.length}`);
    }