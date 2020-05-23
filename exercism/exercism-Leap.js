//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//I am Fatemeh Azizkhani
//Leap year is KABISEH year in Persion a year that contains 366 days

export const isLeap = (year) => {
  var notDivisibleBy4 = year % 4 !== 0;
  var divisibleBy100 = year % 100 == 0;
  var notDivisibleBy400 = year % 400 !== 0;

  var notLeap = notDivisibleBy4 || (divisibleBy100 && notDivisibleBy400);
  return !notLeap;
};