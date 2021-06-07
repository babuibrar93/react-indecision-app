

const isAdult = (age) => {
    if(age < 18) {
        console.log('Not adult');
    }
    else {
        console.log('Adult')
    }
}

const canDrink = (age) => {
    if(age < 20) {
        console.log('Cannot Drink');
    }
    else {
        console.log('can drink')
    }
}

const subtract = (a, b) => a-b;

// export 1. default 2. Named 

export { isAdult, canDrink, subtract as default };