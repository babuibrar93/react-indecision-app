var nameVar = 'babu'; // with var you can re-assign as well as re-define a value
var nameVar = 'ibrar'
console.log('nameVar = ', nameVar);

let nameLet = 'Muhammad ibrar'; // with let you can re-assign a value but can not re-define 
nameLet = 'Muhammad Ibrar Asif';
console.log("nameLet = ",nameLet)

const nameConst = 'Goku'; // with const you can neither re-assign nor re-define a value
console.log("nameConst = ", nameConst); 


// var is function scope
var fullName1 = 'Babu Ibrar'; 
if (fullName1) {
    var firstName1 = fullName1.split(' ')[0];
    console.log(firstName1) ;
}
console.log(firstName1);


// const and let are blocked scope
const fullName = 'Babu Ibrar'; 
if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log('const ',firstName) ;
}
// console.log(firstName); cannot accessed


let fullName2 = 'Muhammad Ibrar'; 
let firstName2;
if (fullName2) {
     firstName2 = fullName2.split(' ')[0];
    console.log('let scope ',firstName2) ;
}
console.log('let scope ',firstName2); // cannot accessed