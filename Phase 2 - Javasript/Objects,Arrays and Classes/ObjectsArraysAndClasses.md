### An important article : https://www.geeksforgeeks.org/javascript/remove-elements-from-a-javascript-array/

# Javascript Delete method working

```
javascript
// --- 1. Deleting an object property (returns true) ---
let myObject = {
  name: "Alice",
  age: 30
};
console.log(delete myObject.age);    // Expected Output: true
console.log(myObject);               // Expected Output: { name: "Alice" }

// --- 2. Deleting an array element (returns true) ---
let myArray = ["apple", "banana", "cherry"];
console.log(delete myArray[1]);      // Expected Output: true
console.log(myArray);                // Expected Output: ["apple", <1 empty item>, "cherry"]
                                     // (Note: The length remains the same, but the element at index 1 is now undefined)

// --- 3. Trying to delete a variable (returns false) ---
let myVariable = 10;
console.log(delete myVariable);      // Expected Output: false
console.log(myVariable);             // Expected Output: 10 (The variable remains unchanged)

// --- 4. Trying to delete a function (returns false) ---
function myFunction() {
  console.log("Hello!");
}
console.log(delete myFunction);      // Expected Output: false
myFunction();                        // Expected Output: Hello! (The function remains intact)

// --- 5. Trying to delete a non-configurable property (returns false) ---
// (Example of a built-in non-configurable property)
console.log(delete Math.PI);         // Expected Output: false
```