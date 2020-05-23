//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//I am Fatemeh Azizkhani 
// Panagram with js
// panagram is a statement that include all of the english alphabets atleast one

export const isPangram = (str) => {
  
var AllAlphabet = "abcdefghijklmnopqrstuvwxyz";

var capsAllAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Alphabet = [];
var CapsAlphabet =[];
Alphabet = AllAlphabet.split("");
CapsAlphabet = capsAllAlphabet.split("");
var a =[];
var b = true;
for(let i=0;i<Alphabet.length;i++){
   a[i] = str.includes(Alphabet[i]) || str.includes(CapsAlphabet[i]);
   
   b = b && a[i];
}
return b;
};