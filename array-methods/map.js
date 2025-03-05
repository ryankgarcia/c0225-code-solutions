"use strict";
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const updatedPrice = {
    price: 0,
    salePrice: 0,
};
// format the prices into an object correctly //
const newPrices = prices.map((num) => num / 2);
console.log('newPrices', newPrices);
// console.log('newPrices', updatedPrice.push(newPrices));
