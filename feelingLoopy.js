const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//Empty  variable to hold each row of data
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

for (let i = 0; i <= data.indexOf(","); i++) {
    cell1 = cell1 + data.charAt(i);

}

console.log(cell1.replace(",", " "));