/*This is Q1-The array called ages*/
let ages= [3, 9, 23, 64, 2, 8, 28, 93];
console.log ("Ages:", ages);
/*This is Q1a-subtracting value of-1st element in array from value of-last element in array. Which is 93-3=90*/
let minusAge=ages[ages.length -1] -ages [0];
console.log ("minusAge", minusAge);

/* This is Q1b-added a new age-98 to thia array*/
ages.push (98)
console.log ("Ages after adding/pushing a new value at the end", ages);
/* This is Q1b- repeated Q1 code-Which is now 98-3=95 */
let minusAgePush=ages[ages.length -1] -ages [0];
console.log ("minusAge", minusAgePush);

/*This is Q1c-using loop to iterate through the previous created array & calculate average*/
let sumofAges = 0;

for (let i =0; i < ages.length; i++) {
    sumofAges += ages [i];
    console.log ("index:", i, "sumOfAges:", sumofAges);
}
console.log ("Total Sum",sumofAges);
let average = sumofAges / ages.length;
console.log ("Average", average);

/* This is Q2a-Created array called names w/req names; used loop to iterate through array & 
calculate average # of lttrs per name*/

let names= ["Sam", "Tommy","Tim", "Sally", "Buck", "Bob"];
let totalCharacters= 0;

for (let i=0; i < names.length; i++) {
   totalCharacters += names [i].length
   console.log ("index;", i, names [i], "totalCharacters:", totalCharacters);
}
let averatgeName = totalCharacters / names.length;
console.log ("Average of Names:", averatgeName);

/* This is Q2b - used loop to iterate through array again & concatente all names together & seperateed by spaces*/
let concatNames = "";
for (let i=0; i < names.length; i++) {

concatNames = concatNames.concat (names [i] + " ");
console.log (i, "Names concatenated", concatNames);
}

/* This is Q3- Access the last element of an array*/
console.log ("This is the last element of the ages array:", ages [ages.length -1]);

/* This is Q4- Access the first element of an array*/
console.log ("This is the first element of the ages array:", ages [0]);

/* This is Q5-create array called nameLengths; with a loop to iterate over previous names array & added 
length of each name */
let nameLengths = [];
for (let i=0; i < names.length; i++) {
        nameLengths.push (names [i] .length);
        console.log ("Name lengths array:", nameLengths)
    }

  /*This is Q6-write a loop to iterate over the nameLengths array & calculate sum of all elements 
  in array */

  let characterTotal = 0;
  for (let i=0; i < nameLengths.length; i++) {
   characterTotal += nameLengths [i];
   console.log ("characterTotal:", characterTotal);
  }

   /*This is Q7- write function that takes 2 parameters, word and n as argumements & returns the word 
   concatenated to itself n number of times */

function concatWords (word, n) {
console.log ("Word Parameter:", word, "n Parameter:", n);
let concat = word.repeat (n);
console.log (concat);
}
concatWords("Hello", 3);

    /*This is Q8-write a function that takes 2 parameters: firstName & lastName & returns a full name as
    first & last name seperated by space*/

    function fullName (firstName, lastName) {
        let fullName= firstName + " " + lastName;
        console.log (fullName);
    }
    /*calling the function */
    fullName ("Su", "Villegas");

     /*This is Q9-write a funmction that takes an array of #'s & returns trut if the same of all 
     #'s  in array is greater than 100 */

     let numbers1 = [100, 200, 300, 400]
     let numbers2 = [1,2,3,4]

     function sumNumbersArray (array) {
        let total = 0;

        for (let i=0; i< array.length;i++) {
            total += array [i];
            console.log ("Total:", total)
        }
        if (total >100) {
            console.log ("Total:", total, true)
            return true
        } else {
            console.log ("Total:", total, false);
            return false

        }
        }

    /*calling the function */
    sumNumbersArray (numbers2);

    /*This is Q10-write a function that takes an array of #'s & rturns the average of all elements
      in the array */
    function calculateNumbersAverage (array) {
        let total=0;

        for (let i=0; i < array.length;i++) {
            total += array [i];
            console.log ("Function, Total:", total);
         }

        let average = total / array.length;
        console.log ("Average of numbers:", average);
        return average;
    }
    /*calling the function */
        calculateNumbersAverage (numbers1);


    /*NOT WORKING - NEED TO FINISH --This is Q11-write a function that takes 2 arrays of #'s & returns tru if average of elements
       in the 1st array is greater than average of elements in 2nd array */
    let numbers3 = [100,100,100];
    let numbers4 = [100,100,99];

    function twoAverages (array1, array2) {
        console.log ("Parameters:", array1, array2);
        let total1=0;
        let total2=0;
        for (const number of array1) {
            total1 += number;
            console.log ("Current number loop 1:", number,"Total1:", total1);
        }
        for (const number of array2) {
            total2 += number;
            console.log ("Current number loop 2:", number,"Total2:", total2);
            }
            
    /*below is code for figuring out average of both sums*/

            let average1=total1 / array1.length;
            let average2=total2 /  array2.length;
            console.log ("Averages", average1, average2);

        if (average1 > average2) {
        console.log (true);
        return true
        }  else if (average1 < average2) {
             console.log (false);
             return false;   
        }  else {
            console.log ("Numbers are equal");
        }
     }
        twoAverages (numbers3, numbers4);

    /*This is Q12- write a function called willBuyDrink that takes boolean isHotOutside, & a 
    number of moneyInPocket, & returns true if it is hot outside & is moneyInPocket is greater than 10.50 */

     function willBuyDrink (isHotOutside, moneyInPocket) {
     console.log ("Parameters", isHotOutside, moneyInPocket);
     let  buyDrink= isHotOutside === true && moneyInPocket > 10.5;
     console.log ("Buy a drink", buyDrink);
     return buyDrink;
     }
     willBuyDrink (true, 11);
    
