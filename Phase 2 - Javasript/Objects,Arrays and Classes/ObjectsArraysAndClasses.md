
 # Tea Array Manipulation Documentation
 
 * This code demonstrates various array operations in JavaScript using a list of tea names. It covers array creation, modification, filtering, sorting, iteration, and transformation. Below is a detailed explanation of each step and the methods used:
 
 ## 1. Array Creation
 - `const Tea = ["Oolong Tea","Milk tea","Green Tea","Herbal Tea"]`
 - Creates an array named `Tea` containing different types of teas.
 ## 2. Adding Elements
 - `Tea.push("Chamomile Tea")`
- Adds "Chamomile Tea" to the end of the `Tea` array.
- The `push()` method returns the new length of the array.
 
 ## 3. Removing Elements
 - `Tea.indexOf("Oolong Tea")` and `Tea.splice(index, 1)`
- Finds the index of "Oolong Tea" using `indexOf()`.
- Removes it from the array using `splice()`, which can remove a specific number of elements from a given index.

 ## 4. Filtering Elements
 - `Tea.filter(isCaffeinatedTea)`
   - Uses the `filter()` method, a higher-order function, to create a new array containing only caffeinated teas.
   - The callback function `isCaffeinatedTea` returns `true` for caffeinated teas.
 - Alternative: `Tea.filter((tea) => tea != "Herbal Tea")`
   - Filters out "Herbal Tea" to get only caffeinated teas.

 ## 5. Sorting Elements
 `Tea.sort()`
   - Sorts the array alphabetically using the `sort()` method.

 ## 6. Iterating Over Elements
  `for (let i = 0; i < Tea.length; i++) { ... }`
   - Uses a `for` loop to print each type of tea in the array.
 
  ## 7. Counting Caffeinated Teas
   Uses `filter()` with a counter to count teas that are not "Herbal Tea".
 
  ## 8. Transforming Elements
  - `Tea.forEach((teaName) => { ... })`
    - Iterates over each tea name and pushes its uppercase version into a new array `capTea`.
 
  ## 9. Finding the Longest Tea Name
  Uses `forEach()` to compare the length of each tea name and stores the longest one in `longTea`.

 ## 10. Reversing the Array
 - Uses a `for` loop to create a new array `revTea` with the elements in reverse order.
 - Alternatively, `Tea.reverse()` can be used to reverse the array in place.
 
  ---
 
  ## Methods Used
  - **push()**: Adds elements to the end of an array.
  - **indexOf()**: Finds the index of a specific element.
  - **splice()**: Removes or replaces elements at a specific index.
  - **filter()**: Creates a new array with elements that pass a test implemented by a callback function.
  - **sort()**: Sorts the elements of an array.
  - **forEach()**: Executes a provided function once for each array element.
  - **toUpperCase()**: Converts a string to uppercase.
  - **reverse()**: Reverses the order of elements in an array.
 
  ## Higher-Order Functions
  Functions like `filter()` and `forEach()` are higher-order functions because they take other functions as arguments and use them to process array elements.
 
  ## Summary
  This code provides a comprehensive example of how to manipulate arrays in JavaScript, including adding, removing, filtering, sorting, iterating, transforming, and reversing elements. It demonstrates both basic and advanced array methods, making it a useful reference for array operations.
 
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