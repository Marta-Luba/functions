'use strict';

const bookings = [];
//below default values inserted directly in the curve braces
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // const createBooking = function (flightNum, numPassengers, price) {
  // numPassengers = numPassengers || 1;
  // price = price || 199; // old way before ES6
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123', 3);
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 1000);

console.log(bookings);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' '); //destructuring str, because split make an arr
  return [first.toUpperCase(), ...others].join(' '); //join is making string back from an array
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('🖐');
};
//example of higher order function and callback fn function
document.body.addEventListener('click', high5);
['Jonas', 'Marta', 'Adam'].forEach(high5); //will consol log 3 times as 3 elements in array
