function House(bedrooms, bathrooms, numSqrft){
    this.bedrooms = bedrooms,
    this.bathrooms = bathrooms,
    this.numSqrft = numSqrft
};

let firstHouse = new House(2, 2, 1000);

console.log(firstHouse.bedrooms);

console.log(firstHouse.numSqrft);

function Dog(name, age){
    this.name = name,
    this.age = age,
    this.bark = function(){
        console.log(this.name + ' just barked!')
    }
};

let rusty = new Dog('Rusty', 3);
let fido = new Dog('Fido', 1)

rusty.bark();

fido.bark();