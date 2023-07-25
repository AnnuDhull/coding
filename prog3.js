// String to Number -----------------------------------------------------------------------------------------------------------

let sno = "15";
let convertedNumber = Number(sno);
console.log("String to Number:", convertedNumber); 


// Number to Boolean --------------------------------------------------------------------------------------------------------
let numBool = 0;
let convertedNumToBool = Boolean(numBool);
console.log("Number to Boolean:", convertedNumToBool); 


// Number to String  ---------------------------------------------------------------------------------------------------------
let num = 12;
let convertedString = String(num);
console.log("Number to String:", convertedString); 

// Date to Number (Timestamp)-------------------------------------------------------------------------------------------------
let date = new Date();
let convertedDateToNumber = date.getTime();
console.log("Date to Number (Timestamp):", convertedDateToNumber);

// Boolean to String-----------------------------------------------------------------------------------------------------------
let bool = true;
let convertedBoolToString = String(bool);
console.log("Boolean to String:", convertedBoolToString); 

// String to Boolean----------------------------------------------------------------------------------------------------------
let strBool = "false";
let convertedStrToBool = Boolean(strBool);
console.log("String to Boolean:", convertedStrToBool); 



// Number to Date--------------------------------------------------------------------------------------------------------------
let timestamp = 123445677890;
let convertedNumberToDate = new Date(timestamp);
console.log("Number to Date:", convertedNumberToDate);