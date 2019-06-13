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


class Student extends Instructor {
  constructor(info){
  super(info)
  this.favSubjects = info.favSubjects
  this.studentname = info.studentname
}

listsSubjects() {
  return this.favSubjects
}

PRAssignment(subject) {
  return `${this.studentname} has submitted a PR for ${subject}`
}

}




//// OBJECTS

const students = new Student({
  studentname: 'Jasmine',
  previousBackground:'Biotech',
  className: 'Web21',
  favSubjects: ['Javascript','C++', 'Java' ]
  //listsSubjects:
  //PRAssignment:
  //sprintChallenge
})



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
console.log(dan.grade('arrays')); // Sandy receives a perfect score on (subject)
console.log(students.listsSubjects()); // Javascript','C++', 'Java
console.log(students.PRAssignment('Object Literals')); // Jasmine has submitted a PR assignment for Object Literals