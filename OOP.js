//################CONSTRUCTOR FUNCTIONS###########

// function House(bedrooms, bathrooms, numSqrft){
//     this.bedrooms = bedrooms,
//     this.bathrooms = bathrooms,
//     this.numSqrft = numSqrft
// };

// let firstHouse = new House(2, 2, 1000);

// console.log(firstHouse.bedrooms);

// console.log(firstHouse.numSqrft);

// function Dog(name, age){
//     this.name = name,
//     this.age = age,
//     this.bark = function(){
//         console.log(this.name + ' just barked!')
//     }
// };

// let rusty = new Dog('Rusty', 3);
// let fido = new Dog('Fido', 1)

// rusty.bark();

// fido.bark();

//################CONSTRUCTOR FUNCTIONS###########

// let Dice = function(sides){
//     this.sides = sides,
//     this.roll= function(){
//         let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//         return randomNumber;

//     }
// };

// let dice = new Dice(6);
// console.log(dice.roll())

//this is a constructor(blueprint) function for a Vehicle Object 
// function Vehicle(make, model, color){
//     //properties
//     this.make = make,
//     this.model = model,
//     this.color = color,

//     //methods
//     this.getName = function(){
//         return this.make + ' ' + this.model;
//     }
// };

// //the following are intances of the object function

// let car = new Vehicle('Toyota', 'Corolla', 'Black');
// let car2 = new Vehicle("Honda", "Civic", "White");


// console.log(car.getName())

// //prototype, used to new properties and method to the constructor function
// car.year = '2016';



// console.log(car)

//####################CLASSES##########

class Vehicle{
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    };
    getName() {
        return this.make + ' ' + this.model;
    }
};

let car = new Vehicle("Toyota", "Corolla", "Black");

console.log(car);


//SUBCLASSES

class Car extends Vehicle {
    getName() {
        //super is used to refer to the parent object!
        return super.getName() + ' - called based class function from child class'
    }
};

let car3 = new Car("Honda", "Accord", "Purple");

console.log(car3.getName())