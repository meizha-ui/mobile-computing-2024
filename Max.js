// DECLARING AND ASSIGNING VALUES
let name = "Max"; // LET / VARIABLES ARE USED FOR VALUES THAT CAN CHANGE
let age = 29;
let hasHobbies = true;

const nameThatCannotChange = "Max"; // CONST / CONSTANTS ARE USED FOR VALUES THAT SHOULD NOT CHANGE

// CONDITIONAL STATEMENTS
if (hasHobbies) { // IF hasHobbies IS TRUE
    console.log("I have hobbies");
}

if (age > 25) {
    console.log("You are older than 25.");
} else if (age < 25) {
    console.log("You are younger than 25.");
} else {
    console.log("You are 25 years old.");
}

// SWITCH STATEMENT
switch (name) {
    case "Max":
        console.log("You are Max");
        break; // BREAK IS USED TO EXIT THE SWITCH STATEMENT
    default: // DEFAULT IS USED WHEN NONE OF THE CASES ARE MET
        console.log("You are not Max");
}

// RUNNING TO THE CONSOLE
console.log(name);
console.log(age);
console.log(hasHobbies);
console.log(nameThatCannotChange);

console.log(`My name is ${name} and I am ${age} years old.`); // OUTPUT: MY NAME IS MAX AND I AM 29 YEARS OLD

let hobbies = ["Sports", "Cooking"];

// PRINTING THE ARRAY
console.log(hobbies); // OUTPUT: ["SPORTS", "COOKING"]
// ACCESSING AN ELEMENT IN THE ARRAY
console.log(hobbies[0]); // OUTPUT: SPORTS

for (let hobby of hobbies) {
    console.log(hobby);
}

// ADDING AN ELEMENT TO THE ARRAY
hobbies.push("programming");
console.log(hobbies); // OUTPUT: ["SPORTS", "COOKING", "PROGRAMMING"]

// MAPPING AN ARRAY
// MAPPING IS USED TO LOOP THROUGH AN ARRAY AND MODIFY THE ELEMENTS
hobbies = hobbies.map((hobby) => {
    return hobby + " is fun";
});
console.log(hobbies); // OUTPUT: ["SPORTS IS FUN", "COOKING IS FUN", "PROGRAMMING IS FUN"]

// OBJECT DECLARATION
let person = {
    name: "Max", // THIS IS A PROPERTY/FIELD
    age: 29, // THIS IS A PROPERTY/FIELD
    hasHobbies: true, // THIS IS A PROPERTY/FIELD
    greet() { // THIS IS A METHOD/FUNCTION OF THE OBJECT
        console.log("Hello, I am " + this.name); // "THIS" REFERS TO THE OBJECT ITSELF
    }
};

// ACCESSING OBJECT PROPERTIES
console.log(person.name); // OUTPUT: MAX
console.log(person.age); // OUTPUT: 29
console.log(person.hasHobbies); // OUTPUT: TRUE

// FUNCTION DECLARATION
function myFunction() {
    console.log("Hello");
}

// CALLING THE FUNCTION
myFunction();

// FUNCTION EXPRESSION USING ARROW FUNCTION
const myArrowFunction = () => {
    return "Hello"; // RETURN IS USED TO RETURN A VALUE FROM A FUNCTION
};

console.log(myArrowFunction()); // OUTPUT: HELLO

// ADDING PARAMETERS/ARGUMENTS TO FUNCTIONS
function describeStudent(name, age) { // THIS IS A FUNCTION THAT TAKES IN TWO PARAMETERS/ARGUMENTS
    console.log("This person is " + name + " and is " + age + " years old");
}

describeStudent(name, age); // OUTPUT: THIS PERSON IS MAX AND IS 29 YEARS OLD

// ANOTHER WAY TO WRITE A FUNCTION USING ARROW FUNCTION
const describeStudentArrow = (name, age) => {
    return `This person is ${name} and is ${age} years old`;
};

console.log(describeStudentArrow(name, age)); // OUTPUT: THIS PERSON IS MAX AND IS 29 YEARS OLD