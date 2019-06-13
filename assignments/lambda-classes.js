// CODE here for your Lambda Classes


class Person {
    constructor(info) {
    this.name = info.name
    this.age = info.age
    this.location = info.location
    }


speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
}
  



}


class Instructor extends Person {
  constructor(info){
  super(info)
  this.studentname = info.studentname
  }
  


  demo(subject) {
    return `Today we are learning about ${subject}`
  }

  grade(subject) {
    return `${this.studentname} receives a perfect score on ${subject}`
  }
}


//class Student extends v





//// OBJECTS



const dan = new Instructor({
      name: 'Dan',
      age: 'Infinity',
      location: 'Denver',
      specialty: 'Relentless Debugger',
      favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
      catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
      studentname: 'Sandy'
  });

 const fred = new Person({
     name: 'Fredrico',
     location: 'Mars',
     age: 22,
     favLanguage: 'C++',
     specialty: 'UI',
     cathPhrase: 'Yolo'
 });



console.log(fred.speak()); // Hello my name is Fred, I am from Mars.
console.log(dan.demo('cats')); // Today we are learning about (subject)
console.log(dan.grade('arrays')) // Sandy receives a perfect score on (subject