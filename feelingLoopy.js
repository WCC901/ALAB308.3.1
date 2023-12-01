const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

//Empty  variable to hold each row of data
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let row1 = "";
//  Find A way to store each section in
//  the seperate cell variables

for (let letter in data) {
    cell1 = cell1 + letter;
}

console.log(cell1);