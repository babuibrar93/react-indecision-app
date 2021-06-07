// argument object - is no longer bound with the arrow function

const add = function(a,b) {
    console.log(arguments);
    return a+b;
}
console.log(add(10,10));

const addArrow = (a,b) => a+b;
// console.log(arguments); no longer bound
console.log(addArrow(20,30));

// this keyword - is no longer bound with the arrow function

// const user = {
//     name: 'Babu Ibrar',
//     cities: ['Lahore', 'Karachi', 'Islamabad'],
//     printPlaces: function() {
//         const that = this;                             // es5 function
//         this.cities.forEach(function(city) {
//             console.log(that.name + ' Lives in ' + city);
//         })
//     }
// }

// user.printPlaces();

const user = {
    name: 'Babu Ibrar',
    cities: ['Lahore', 'Karachi', 'Islamabad'],
    printPlaces() {
        this.cities.forEach((city) => {
            console.log(this.name + ' Lives in ' + city);
        })
    }
}

user.printPlaces();


// map function- it takes an array and return a new array 
const userTow = {
    name: 'Babu Ibrar',
    cities: ['rawalpindi', 'Multan', 'Sialkot'],
    printPlaces() {
       return this.cities.map((city) => this.name + ' Lives in ' + city);
    }
};

console.log(userTow.printPlaces());

// challange 

const multiplier = {
    numbers: [1,4,8],
    multiplyBy: 3,
    multiply() {
       return this.numbers.map((nmbr) => nmbr * this.multiplyBy);
    }
};
console.log(multiplier.multiply());