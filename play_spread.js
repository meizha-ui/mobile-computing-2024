//spread operator and res parameter 

// Example 1 
// Copying an array 
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr2); // [1, 2, 3]

// Example 2
// Mergin arrays
const ex2_arr1 = [1, 2, 3];
const ex2_arr2 = [4, 5, 6]
const ex2_arr3 = [... ex2_arr1, ... ex2_arr2]

console.log(ex2_arr3) // [1, 2, 3, 4, 5, 6,]

// Example 3
// Adding elements to an array
const ex3_arr1 = [1, 2, 3];
const ex3_arr2 = [...ex3_arr1,4 , 5, 6];

console.log9(ex3_arr2) // [1,2,3,4,5,6]

//the spread operator is not only used for arrays, it can also be used for objects.
// Example4 
// copying an object

const obj1 = {name: 'John', age: 25};
const obj = {...obj1};

console.log(obj2)//{name:John,Age;25}

//Example 5
//Mergin objects 
const obj3 = {name: 'John', age:25};
const obj4 = {city: 'new york', country:'USA'};

console.log(obj5);//{name:'John,age:25,},city:'newyork',country:'USA"}

//Example 6
//Adding properties to an object
const obj6 = {name: 'John',age:25};
const obj7 = {...obj6,city:'new york', country:'USA'};

console.log(obj7);//{name:'John',age:25},city:'newyork',country:'USA'}

//Example 7
//overloading properties
const obj8 = {name:'john',age:25};
const obj9 ={obj8 age:36};

console.log(obj9);//{name:'john',age:36}

//!reset parameter
//reset parameter are used to represent an indefinite number of arguments as an array, it allows to pass an arbotary of arguments to a function 

//Example 8 
function sum(...args){
    return args;
}

console.logs(sum(1,2,3,4,5,));//[1,2,3,4,5]