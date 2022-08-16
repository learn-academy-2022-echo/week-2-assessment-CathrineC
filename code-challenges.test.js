// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// // b) Create the function that makes the test pass.

// 

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// // Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three" 

        // describe ("isDivisibleBy3", () => {
        //     it("returns number is divisible by three or not", () => {
        //         expect(isDivisibleBy3({ number: 15 })).toEqual("15 is divisible by three")
        //         expect(isDivisibleBy3({ number: 0 })).toEqual("0 is divisible by three")
        //         expect(isDivisibleBy3({ number: -7 })).toEqual("-7 is not divisible by three")
        //     })
        // })
                // FAIL  ./code-challenges.test.js
                // isDivisibleBy3
                //   ✕ returns number is divisible by three or not (1 ms)
            
                // ● isDivisibleBy3 › returns number is divisible by three or not
    
// b) Create the function that makes the test pass.

    // PSEUDO CODE:
    // Declare a function called isDivisibleBy3 that determines if the value of the object is divisible by 3 or not
    // Input: takes an object as an argument
    // Output: Number is evenly divisible by three or Number is not divisble by three

        // const isDivisibleBy3 = (obj) => {
        //     if (obj % 3 === 0) {
        //         return `${obj} is divisible by three`
        //     }else if (obj % 3 !== 0){
        //         return `${obj} is not divisible by three`
        //     }
        // }
        // console.log(isDivisibleBy3(object1.number))
        // console.log(isDivisibleBy3(object2.number))
        // console.log(isDivisibleBy3(object3.number))

                // PASS  ./code-challenges.test.js
                // isDivisibleBy3
                //   ✓ returns number is divisible by three or not (2 ms)
      

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

        // describe ("capitalizeNouns", (arr) => {
        //     it ("returns an array with all the first letter of the words capitalized", () => {
        //         expect(capitalizeNouns(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        //         expect(capitalizeNouns(["temperature", "database", "chopsticks", "mango", "deduction"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
        //     })
        // })
                // FAIL  ./code-challenges.test.js
                // capitalizeNouns
                //   ✕ returns an array with all the words capitalized (1 ms)

                // ● capitalizeNouns › returns an array with all the words capitalized

                //   ReferenceError: capitalizeNouns is not defined

// b) Create the function that makes the test pass.
    // PSEUDO CODE:
    // Declare a function capitalizeNouns
    // Input: takes in an array of words
    // Output: (Based on the Expected Output on each variables) returns an array with all the first letter of the words capitalized
    
        // const capitalizeNouns = (arr) => {
        //     return arr.map(noun => {
        //         return noun.charAt(0).toUpperCase() + noun.slice(1).toLowerCase()
        //     })
        // }
        // console.log(capitalizeNouns(randomNouns1))
        // console.log(capitalizeNouns(randomNouns2))

                // PASS  ./code-challenges.test.js
                // capitalizeNouns
                // ✓ returns an array with all the words capitalized (3 ms)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// const vowelTester1 = "learn"
// // // Expected output: 1
// const vowelTester2 = "academy"
// // // Expected output: 0
// const vowelTester3 = "challenges"
// // // Expected output: 2

// describe ("vowelIndex", () => {
//     it("logs the index of the first vowel", () => {
//         expect(vowelIndex("learn")).toEqual(1)
//         expect(vowelIndex("academy")).toEqual(0)
//         expect(vowelIndex("challenges")).toEqual(2)
//     })
// })
        // FAIL  ./code-challenges.test.js
        //   vowelIndex
        //     ✕ logs the index of the first vowel (1 ms)

        //   ● vowelIndex › logs the index of the first vowel

        //     ReferenceError: vowelIndex is not defined

// b) Create the function that makes the test pass.

    // PSEUDO CODE:

    // Declare a function vowelIndex
    // Input: takes in a string
    // Convert the string into an array and locate the index of the first vowel
    // Create a variable with an array of vowels
    // Loop through each letter in the array and check if it exists in the vowels constant
    // Output: logs the index of the first vowel

    // const vowelIndex = (word) => {
    //     let letters = word.split("")
    //     const vowels = ["a", "e", "i", "o", "u"]
    //     for (let i = 0; i < letters.length; i++) {
    //         if (vowels.indexOf(letters[i]) !== -1) {
    //             return i
    //         }       
    //     }
    // }   
    // console.log(vowelIndex(vowelTester1))
    // console.log(vowelIndex(vowelTester2))
    // console.log(vowelIndex(vowelTester3))

        // PASS  ./code-challenges.test.js
        // vowelIndex
        //   ✓ logs the index of the first vowel (4 ms)
