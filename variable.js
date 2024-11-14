// let firstName = 'Ibrahim';   // Strings
// let lastName = 'Alabi';   // Strings
// let sureName = null;       // NULL
// let userName;              // Undefined

// let age =  27:;             // Number

// let isMuslim = true;       // Boolean
// let doesHatesToCode = false;

// let sampleArray = [0,1,2,3,4,5]   // Array

const person = {
    firstName: 'Ibrahim',
    lastName: 'Alabi',
    userName: 'adeabimbola'
}


let firstName = 'Ibrahim' ,
lastName = 'Alabi' ,
sureName = null,
userName,
age = 27
isMuslim = true
doesHateToCode = false
sampleArray = [0,1,2,3,4,5];


let variables = [firstName, lastName, sureName, userName, age, isMuslim, doesHateToCode, sampleArray, person]

variables.forEach(variable => {
    console.log(typeof variable)
});