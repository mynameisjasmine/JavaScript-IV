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
  return `Today we are learning about ${subject}`;
}

grade(subject) {
  return `${this.studentname} receives a perfect score on ${subject}`;
}

gradeCheck() {
  return `${students.studentname}'s current grade is: ${students.grade}`
}
}


class Student extends Instructor {
constructor(info){
super(info)
this.favSubjects = info.favSubjects
this.studentname = info.studentname
this.grade = info.grade
}

listsSubjects() {
return this.favSubjects
}

PRAssignment(subject) {
return `${this.studentname} has submitted a PR for ${subject}`;
}

sprintChallenge(subject) {
 return `${this.studentname} has begun sprint challenge on ${subject}`;
}



}


class ProjectManager extends Student {
constructor(info){
super(info)
this.name = info.name
this.studentname = info.studentname
}

standUp(channel) {
return `${this.name} announces to ${channel}: @channel standy times`;
}

debugsCode(subject){
return `${this.name} debugs ${this.studentname}'s code on ${subject}`;
}

gradeCheck() {
  return `${students.studentname}'s current grade is: ${students.grade}`
}

}




//// OBJECTS


const dave = new ProjectManager({
    name: 'David',
    age: '31',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.',
    studentname: 'Tommy'
});

const students = new Student({
studentname: 'Jasmine',
previousBackground:'Biotech',
className: 'Web23',
favSubjects: ['Javascript','C++', 'Java' ],
grade: Math.floor(Math.random()* 20)

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
console.log(dan.gradeCheck(students.grade)); // * Randomly generates student's grade

console.log(students.listsSubjects()); // Javascript','C++', 'Java
console.log(students.PRAssignment('Object Literals')); // Jasmine has submitted a PR assignment for Object Literals
console.log(students.sprintChallenge('Closures')); // Jasmine has begun sprint challenge on Closures
console.log(dave.standUp('web23_channel')); // Pat announces to web21_pat: @channel standy times
console.log(dave.debugsCode('CSS')); // Pat debugs Tommy's code on CSS
console.log(dan.gradeCheck(students.grade)); // * Randomly generates student's grade