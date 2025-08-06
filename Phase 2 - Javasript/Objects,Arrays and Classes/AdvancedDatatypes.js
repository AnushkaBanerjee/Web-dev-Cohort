// // 1.Create an array containing different types of teas 
const Tea = ["Oolong Tea","Milk tea","Green Tea","Herbal Tea"]
// 2.Add "Chamomile Tea" to the existing list of teas 
const arrayLen = Tea.push("Chamomile Tea") // push function returns current length of array
console.log(arrayLen);//Output : 5
console.log(Tea);

// 3. Remove "Oolong Tea" from the list of Teas
// const index = Tea.indexOf("Oolong Tea")
// if(index > -1){
//     Tea.splice(index,1)
// }
// // removes a specific number of elements from specified index ,here 0 specifies index,1 specifies number of elements
// console.log(Tea);

// 4. Filter the list to only include the tea which are caffeinated

// function isCaffeinatedTea(tea) {
//     return tea === "Oolong Tea" || tea === "Milk tea" || tea === "Green Tea";
// }
// const caffTea = Tea.filter(isCaffeinatedTea);//filter() method creates a new array
// console.log(caffTea);

//there is another method for the same

const caffTea = Tea.filter((tea)=>tea != "Herbal Tea")
console.log(caffTea);




// Yes, this is a higher-order function call. Here’s how it works:

// The method Tea.filter(isCaffeinatedTea) uses the filter() function, which is a higher-order function because it takes another function (a callback) as an argument.
// filter() loops through each element in the Tea array and calls isCaffeinatedTea for each one.
// isCaffeinatedTea returns true for "Oolong Tea", "Milk tea", or "Green Tea", so only those teas are included in the new caffTea array.
// The result is that caffTea contains only the caffeinated teas from the original array.
// In summary: filter() is a higher-order function because it takes a function as an argument and uses it to decide which elements to keep.

// 5. Sort the list of teas in alphabetic order 
console.log(Tea.sort())
// 6. Use for loop to print each type of tea in the array 
for(let i = 0;i < Tea.length;i++){
    console.log(Tea[i]);  
}

//6.Use a for loop to count how many teas are caffeinated (excluding Herbal tea)
let countCaff = 0;
Tea.filter(tea => {
    if(tea != "Herbal Tea")
        countCaff++;
})
console.log(countCaff);

//7. Use for loop to create new array with all tea names in upper case
let capTea = [];
Tea.forEach((teaName) =>{
    capTea.push(teaName.toUpperCase())
})
console.log(capTea);

//8.Use for loop to find tea name with most characters
let longTea = ''
Tea.forEach(teaName =>{
if(longTea.length < teaName.length) longTea = teaName
})

console.log(longTea);
//9. Use a for loop to reverse the order of teas in array
// console.log(Tea.reverse());
const revTea = [];

for(let i = Tea.length - 1 ;i >= 0 ;i--){
revTea.push(Tea[i])
}
console.log(revTea);

