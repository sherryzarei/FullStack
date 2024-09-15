console.log("Question 1")

const greeter = (myArray, counter) => {  // counter unused
    const greetText = 'Hello ';
    for (let x of myArray) {
    console.log(`${greetText}${x}`);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
//--------------------------------------------------------------
console.log("\nQuestion 2")

const capitalize = ([firsLetter, ...rest])=> firsLetter.toUpperCase() + rest.join('').toLowerCase();

console.log(capitalize('fooBar')); // Output: Foobar
console.log(capitalize('nodeJs')); // Output: Nodejs
//--------------------------------------------------------------
console.log("\nQuestion 3")

const colors = ['red', 'green', 'blue']
const capitalizedColors = colors.map((color) => capitalize(color));
console.log(capitalizedColors)
//--------------------------------------------------------------
console.log("\nQuestion 4")

var values = [1, 60, 34, 30, 20, 5]
const filteredLessThan20 = values.filter((value) => value < 20)

console.log(filteredLessThan20)
//--------------------------------------------------------------
console.log("\nQuestion 5")

var array = [1, 2, 3, 4]
const calculateSum = array.reduce((accumulator, value) => accumulator + value)
const calculateProduct = array.reduce((accumulator, value) => accumulator * value)

console.log(calculateSum)
console.log(calculateProduct)
//--------------------------------------------------------------
console.log("\nQuestion 6")

class Car{
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details () {
        return this.model + " " + this.year
    }
}

class Sedan extends Car {
    constructor(model, year, price) {
        super(model, year);
        this.price = price;
    }
    info() {
        return this.model +" has a balance of " + this.price
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details())

const sedan1 = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan1.info())