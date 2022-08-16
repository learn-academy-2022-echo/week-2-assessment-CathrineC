// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: It becomes an array => ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '2']
// b) Verify and explain: 
      // After verifying, the output is
            // [
            //   'E', 'c', 'h',
            //   'o', ' ', '2',
            //   '0', '2', '2'
            // ]
      // .split() is a built-in method to convert a string to an array.
                        
// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: 
      // After verifying, the output is undefined. This is because for every function there should be a return. To make the code work, it should be like this:
      // const greeter = (name) => {
      //   return `Hello, ${name}!`
      // }
      // console.log(greeter("LEARN Student")) 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain: 
      // After verifying, the output is [ 8, 10, 12, 14, 16 ]. The higher-order method .map() goes through each element of the given array and returns another array after multiyplying each number by 2. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: 
      // After verifying, the output is [ 11, 13, 15 ]. The higher-order method .filter() goes through each element of the given array and returns another array with only the Odd numbers. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: 
      // After verifying, the output is the string JavaScript. The code logs the index 0 in the languages array from the myCodingSkills object.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: 'George', 'Echo', 2022
// b) Verify and explain: 
      // After verifying, the output is an object => Learn { student: 'George', cohort: 'Echo', year: 2022 }.
      // When console.log is run, the output will be the full object which includes the property names and the property values of an object.
