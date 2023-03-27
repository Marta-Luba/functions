'use strict';

// const bookings = [];
// //below default values inserted directly in the curve braces
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // const createBooking = function (flightNum, numPassengers, price) {
//   // numPassengers = numPassengers || 1;
//   // price = price || 199; // old way before ES6
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123', 3);
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 1000);

// console.log(bookings);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' '); //destructuring str, because split make an arr
//   return [first.toUpperCase(), ...others].join(' '); //join is making string back from an array
// };

// const allUpper = function (str) {
//   return str.toUpperCase();
// };

// //Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);
// transformer('marta luba is cool', allUpper);

// const high5 = function () {
//   console.log('🖐');
// };
// //example of higher order function and callback fn function
// document.body.addEventListener('click', high5);
// ['Jonas', 'Marta', 'Adam'].forEach(high5); //will consol log 3 times as 3 elements in array

// const onlyNum = function (arr) {
//   for (const item of arr) {
//     if (typeof item === 'number') {
//       console.log(item);
//     }
//   }
// };

// onlyNum(['marta', 3, 5, 'korona', 20001, 11]);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');

// greeterHey('jonas');
// greeterHey('Marta');
// greet('Hello')('Christina');

// //arrow function to help you understand that code
// const greet2 = greeting => name => console.log(`${greeting} ${name}!`);
// //because there are 2 functions that there are two function calls below
// greet2('hi there')('jonas');

// const greetHiThere = greet('Hi there');
// greetHiThere('Luba');

// const greetGoodMorning = greet('Good morning');
// greetGoodMorning('Michael');

// greet2('good afternoon')('LUCIA');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //synthax below or: book: function() {};
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book('239', 'Marta Luba');
lufthansa.book('635', 'John Martin Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; //must be written outside the obj, to make a call to this obj and this fn

//book(23, 'Sarah Wiliams'); //doesn't work that way.
//call method / use the same property names in all objs
book.call(eurowings, 23, 'Sarah Parker');
book.call(lufthansa, 239, 'Mary Cooper');
console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 456, 'Luis Rossberg');

//APPLY METHOD //is not used anymore //1st: obj,  2nd: arr
const flightData = [583, 'Chris VanCio'];
book.apply(swiss, flightData);
console.log(swiss);

//modern js method is to call fn with spread operator to unpack data from an array
book.call(swiss, ...flightData);

//////////////////////////////////////////////
//BIND METHOD !
//book.call(eurowings, 23, 'Sarah Parker');
//bind method does not call the function, it will return a new function, where this keyword will always set to eurowings
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Lucy Brown');

//going futher with binding another parameter
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Maria Trampkowska');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
console.log(lufthansa);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//PARTIAL APPLICATION // it means that we can pre-set parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

const addVAT = addTax.bind(null, 0.23); //null because there is no this keyword
//addVAT = value => value + value *0.23
console.log(addVAT(100)); //123
console.log(addVAT(2500)); //3075

//challenge to rewrite function returning another fn
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
