// Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
// Begin with the following task:

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.


// After you have implemented the above:
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
// Using the original CSV example data, here is what the result of this step should look like:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// becomes
// [["ID", "Name", "Occupation", "Age"], ["42", "Bruce", "Knight", "41"], ["57", "Bob", "Fry Cook", "19"], ["63", "Blaine", "Quiz Master", "58"], ["98", "Bill", "Doctor’s Assistant", "26"]]



/*
// feeling loopy
// loop through the string
*/

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";



for (let i = 0; i < csv.length; i++) {
    console.log(csv[i]);
}

let currentCell = 1;
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

// store each cell in a variable

if (csv [i] === ",") {

// if is a comma move to next cell

}else if (csv[i] ==="\n") {
console.log(cell1, cell2, cell3, cell4);
currentCell = "";
 cell1 = "";
 cell2 = "";
 cell3 = "";
 cell4 = "";

} else {
    if(currentCell === 1) {
        cell += csv[i]; 
    } else if (currentCell === 2) {
        cell += csv[i];
    } else if (currentCell === 3) {
        cell += csv[i];
    }else if (currentCell === 4) {
        cell += csv[i];
    }
}


// if is a \n move to next row



// Remember to commit your solution once it is working.



//Arrays
const car = ["red, 300, 2023"];

console.log(car[0]);
console.log(car[1]);
console.log(car[2]);

// Object
const mycar = {
    color : "blue",
    hp : 400 ,
    Year : 2005 ,
    IsElectric : false ,
    avaliabletrims : ["lx, ex, xl"],
    engine : [
        cylinder (4),
    ]
}

const someKey = "year"


 console.log(mycar[color]);
 console.log(mycar[avaliabletrims]);
 console.log(mycar.IsElectric);
 console.log(mycar.engine.cylinder);

 console.log(mycar.someKey);




























