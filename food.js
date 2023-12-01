const foodData = require('./food.json');

// problem 1
function printAll(){
    // console.log(foodData);
    return foodData;
}
// return all vegetables
function findVegetable(){
     return foodData.filter((food) =>  food.category === "Vegetable");
}
// list all the food items with category fruit
function findFruit(){
    return foodData.filter((food) => food.category === "Fruit");
}
// list all the food items with category protien
function findProtein(){
    return foodData.filter((food)=> food.category === "Protein");
}
// list all the food items with category nuts

function findNuts(){
    return foodData.filter((food)=> food.category ==="Nuts");
}
// list all the food items with category grains
function findGrains (){
    return foodData.filter((food)=> food.category === "Grain");
}
// list all the food items with category dairy
function findDairy(){
    return foodData.filter((food)=> food.category === "Dairy");
}
// list all the food items with calorie above 100
function highCalorie(){
    return foodData.filter((food)=> food.calorie >= 100);
}
// list all the food items with calorie below 100
function lowCalorie(){
    return foodData.filter((food)=> food.calorie <= 99);
}
//  list all the food items with highest protien content to lowest
function highProtein(){
    return foodData.sort((a,b)=> b.protiens - a.protiens)
}
// list all the food items with lowest cab content to highest
function lowProtein(){
    return foodData.sort((a,b)=> a.protiens - b.protiens)
}










// console.log( `\n list all the food items\n `);
// console.log(printAll());
// console.log( `\n list all the food items with category vegetables\n `);
// console.log(findVegetable());
// console.log( `\n list all the food items with category fruit\n `);
// console.log(findFruit());
// console.log( `\n list all the food items with category nuts\n `);
// console.log(findNuts());
// console.log( `\n  list all the food items with category grains\n `);
// console.log(findGrains());
// console.log( `\n  list all the food items with category dairy\n `);
// console.log(findDairy());
// console.log( `\n  list all the food items with calorie above 100\n `);
// console.log(highCalorie());
// console.log( `\n  list all the food items with calorie below 100\n `);
// console.log(lowCalorie());
// console.log( `\n  list all the food items with highest protien content to lowest\n `);
// console.log(highProtein());
// console.log( `\n  list all the food items with lowest cab content to highest\n `);
// console.log(lowProtein());




