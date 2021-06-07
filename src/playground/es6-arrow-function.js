const square = function (x) {
    return x*x;
}
console.log(square(8));

// Arrow Function
const squareArrow = (x) => {
    return x*x;
}
console.log(squareArrow(9));

const squareArrowTwo = (x) => x*x 
console.log(squareArrowTwo(9));

// Challange 

const getFullName = (getFirstName) => getFirstName.split(' ')[0];
console.log(getFullName('babu Ibrar'));

const getFullName1 = (getFirstName1) => {
    return getFirstName1.split(' ')[1];
}
console.log(getFullName1('babu Ibrar'));