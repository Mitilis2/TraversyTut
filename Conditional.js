// Constructor Function
function Person(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
// Instantiate object
const person1 = new Person('Mitilis', 'Shah', '03-01-1991');
const person2 = new Person('Mike', 'Perez', '03-21-1990');
console.log(person1);
//class

class Person {
    constructor(firstName,)
}

