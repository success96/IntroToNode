
//                 1
//when 'this' is not inside of a declared object, It points to the global object!
//hence any variable declared on such 'this' is a global variable



// console.log(this);

// let data = {};

// data.instructor = 'Elie';

// console.log(data);

//this why this defined inside a function points to a global variable, to avoid such bhavior, use the 'use strict'

//"use strict"
// function whatIsThis(){
//     this.person = 'Fawas'
// };
// let p = whatIsThis()
// console.log(person);


//          2.
//when the keyword 'this' is inside of a declared object--------Implicit/ Object rule
//it will refer the closest parent object
// let person={
//     firstName: 'Elie',
//     sayHi: function() {
//         console.log('Hi ' + this.firstName)
//     },
//     determineContext: function (){
//         console.log(this === person)
//     }
// };

// person.sayHi();

// person.determineContext();


//      3.
//Choose what we want the context of 'this' to be using call, apply or bind, which are methods that can only be used by fucntions

let person={
    firstName: 'Elie',
    sayHi: function() {
        console.log('Hi ' + this.firstName)
    },
    determineContext: function (){
        console.log(this === person)
    },
    dog: {
        sayHello: function(){
            console.log('Hello '+ this.firstName)
        },
        determineContext: function (){
            console.log(this === person)
        }
    }
};

person.sayHi();

person.determineContext();

person.dog.sayHello();
person.dog.determineContext();

person.dog.sayHello.call(person);       //using call
person.dog.determineContext.call(person);       //using call

 