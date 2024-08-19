// Definer arrays
let myArray = ['element1', 'element2', 'element3'];

// opgave 1: Tilføj element4 til enden af myArray
myArray.push('element4');
console.log(myArray); // ['element1', 'element2', 'element3', 'element4']

// Fjern element4 igen
myArray.pop();
console.log(myArray); // ['element1', 'element2', 'element3']

// opgave 2: Tilføj element4 til starten af myArray
myArray.unshift('element4');
console.log(myArray); // ['element4', 'element1', 'element2', 'element3']

// Fjern element4 igen
myArray.shift();
console.log(myArray); // ['element1', 'element2', 'element3']

// Definer myFruits og myVegetables
let myFruits = ['æble', 'pære', 'banan', 'appelsin', 'citron'];
let myVegetables = ['salat', 'blomkål', 'spidskål', 'agurk'];

// opgave 3: Tilføj "mandarin" og "fersken" efter "pære"
myFruits.splice(2, 0, 'mandarin', 'fersken');
console.log(myFruits); // ['æble', 'pære', 'mandarin', 'fersken', 'banan', 'appelsin', 'citron']

// Fjern "mandarin" og "fersken" igen
myFruits.splice(2, 2);
console.log(myFruits); // ['æble', 'pære', 'banan', 'appelsin', 'citron']

// opgave 4: Træk "blomkål" og "spidskål" ud af myVegetables
let myCabbage = myVegetables.slice(1, 3);
console.log(myCabbage); // ['blomkål', 'spidskål']

// opgave 5: Sæt arrays myFruits og myVegetables sammen i en ny array myYummies
let myYummies = myFruits.concat(myVegetables);
console.log(myYummies); // ['æble', 'pære', 'banan', 'appelsin', 'citron', 'salat', 'blomkål', 'spidskål', 'agurk']

// opgave 6: Sorter array myYummies
myYummies.sort();
console.log(myYummies); // ['appelsin', 'banan', 'blomkål', 'citron', 'salat', 'spidskål', 'æble', 'agurk', 'pære']

// Vend rækkefølgen på array myYummies
myYummies.reverse();
console.log(myYummies); // ['pære', 'agurk', 'æble', 'spidskål', 'salat', 'citron', 'blomkål', 'banan', 'appelsin']

// Definer myNumbers
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// opgave 7: Brug map() til at skabe myNextNumbers, hvor hvert element er 7 større
let myNextNumbers = myNumbers.map(x => x + 7);
console.log(myNextNumbers); // [8, 9, 10, 11, 12, 13, 14, 15, 16]

// Brug map() igen for at skabe myLastNumbers, hvor hvert element er 12 gange så stort
let myLastNumbers = myNextNumbers.map(x => x * 12);
console.log(myLastNumbers); // [96, 108, 120, 132, 144, 156, 168, 180, 192]

// Definer myNames
let myNames = ['keld', 'søren', 'jens', 'tine', 'keld', 'ib', 'lene', 'keld', 'frederikke', 'line', 'kurt'];

// opgave 8: Skab en ny array uden 'keld'
let filteredNames = myNames.filter(name => name !== 'keld');
console.log(filteredNames); // ['søren', 'jens', 'tine', 'ib', 'lene', 'frederikke', 'line', 'kurt']
