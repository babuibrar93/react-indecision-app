

class Person {
    constructor(name , age='0') {
        this.name=name;
        this.age=age;
    }

    getGreetings() {
        return `Hi! My name is ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old !!` // template string
    }
}

class Student extends Person {
    constructor(name,age,major) {
        super(name,age);
        this.major=major;
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
       let description = super.getDescription();
        if(this.hasMajor) {
         description += ` His major is ${this.major}`;
        }

       return description;
    }
    
}

class Traveler extends Person {
    constructor(name,age,major,homeLocation) {
        super(name,age,major);
        this.homeLocation=homeLocation;
    }

   
    getGreetings() {
        let greetings = super.getGreetings();
        if(this.homeLocation){
            greetings = greetings + ` & I live in ${this.homeLocation}`;
        }

        return greetings;
    }
}

const me = new Traveler('Babu Ibrar', 24, 'Software Engineering', 'Nain Sukh');
console.log(me.getGreetings());

const other = new Traveler();
console.log(other.getGreetings());

// const me = new Student('Babu Ibrar', 24);
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());