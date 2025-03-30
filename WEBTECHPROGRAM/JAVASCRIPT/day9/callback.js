console.log("callback function");

//Function for ordering the food
function orderFood(waiter)
{
    console.log(" Chef your delicious chicken is ready!");
    waiter();
}

//! Function for serving the food
function servingOrder()
{
    console.log("Waiter: the food is ready now you can enjoy your food");
}

function ParcelFood()
{
    console.log("Please make parcel");
}
 orderFood(ParcelFood)