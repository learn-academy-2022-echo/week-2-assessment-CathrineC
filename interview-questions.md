# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: 
Based on my experience in creating a function using JavaScript, their commonality is that they can be both inside the parenthesis that can hold different data types. However, they hold different values. A parameter holds the variables of a function. An argument, on the other hand, are the values invoked by a built-in method.

Researched answer: 
Reading through sources online, a parameter in a function are variables that are listed as a default value and are evaluated from left to right. An argument is the actual values that are called by the function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: 
What I know is that whenever I use the built in method .map(), I know that it has fixed  parameters which are value, index, and array. The parameter value is the one that is required and index and array are optional parameters. The value parameter is required because it shows the current value.

Researched answer: 
Based on the syllabus that I got from LEARN Academy, .map() is a higher-order function that has 3 built-in parameters. These are value, index, and array. The parameters' order will be the same, however, it is only the value that is required. The other two parameters are optional depending on the expected output. Reading further online, I found out that the reason why the parameter value is required is because if it's empty, the value "undefined" will pass as its value.

3. What is the difference between map and filter?

Your answer: 
I use these higher-order functions when coding in JavaScript and I use them depending on the expected output that I want to display. I use .map() if I want to check each value in an array, add in a condition that I want to happen to each value, and come up with a new array with the same number of values. As for .filter(), I use it to check each value in an array, add in my condition that I want to happen to each value, and return the values that I need from the array. It is not restricted to the same number of values.

Researched answer: 
Based on the syllabus that was provided by LEARN academy is that both map and filter are higher-order functions that have built-in parameters which are value, index, and array. They both iterate through an array and return another array. The difference is that .map() may only return an array of the same number of values whereas .filter() will return the expected number of values which is dependent on the condition. Using the .filter() is limited to returning values that are true to the condition and doesn't include the value when it is evaluated as false.

4. What is the DOM?

Your answer: 
DOM is an acronym for Document Object Model. It is an interface where someone can see the output of the code. For instance, when I use console.log() what I want to display. 

Researched answer: 
Reading through sources online, I found that DOM stands for Document Object Model. They define it as a visual representation of the objects that comprise the structure and codes. It is an interface that can be accessed and manipulated making a page more dynamic.

5. What is React? Why would you use it?

Your answer: 
React is created by Meta. It is a JavaSript library that is composed of components. Each component has its own code that functions distinctively and can be reused which makes it easy to be identified and modified. 

Researched answer: 
I found that React is a library for JavaScript to build user interfaces. React updates the User Interface or UI as you make changes on the code, making the code more predictable and easier to debug. It is component based meaning it consists of components put together and these components can be reused instead of writing the code multiple times.  

6. STRETCH: What is hoisting in JavaScript?

Your answer: 
I would define hoisting as pulling up. I would think that hoisting JavaSript is pulling up either values or code. This is the one that is being tested by Jest if the code in JavaScript is matching the defined and expected output.

Researched answer: 
What I have read online is that JavaScript hoisting  is pulling variables to the top of the file even if they are not positioned on top. JavaScript can hoist variables declared in var even if it is at the bottom of the code. The variable declared with let and const on the other hand cannot be referenced if they are outside the code. There's also called the function hoisting wherein the function hoists the variable depending on the position of the variable whether it is inside or outside the encapsulation. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:
    I found that User stories are informal tools to capture a description of an application based on the end-user. It identifies the requirements of the program but instead of writing a lengthy documentation of how the program will run, they show a brief description of the expectations. 

2. Spread operator:
    I found that the Spread operator uses 3 dots (example: [...value1, ...value1]) which allows a part of an array or object to be copied and output into another array or object.

3. React props: 
    React props are used to call on information from one component to another. Unlike state, the value of props cannot be modified.

4. Conditional rendering: 
    In React, we can use conditional statements to render components that are used in JavaScript. These are if statements, logical operators (&&), and ternary operators that use ? and identifying true or false.

5. DOM events: 
    The DOM events triggers an expectation invoked by the function in a component. The changes made by the event is triggered by the user. The user can see the change/s once the DOM is triggered. One example that I have use is the onClick wherein the user can click on the designated area and expect a change based on the function.
