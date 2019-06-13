// CODE here for your Lambda Classes

class Person {
    constructor(info) {
    this.name = info.name
    this.age = info.age
    }


speak () {
    return `Hello my name is ${this.name}`;
}
  











}





//// OBJECTS

const fred = new Person({
    name: 'Fredrico',
    location: 'Mars',
    age: 22,
    favLanguage: 'C++',
    specialty: 'UI',
    cathPhrase: 'Yolo'
});



console.log(fred.speak); // Hello my name is Fred, I am from Mars.