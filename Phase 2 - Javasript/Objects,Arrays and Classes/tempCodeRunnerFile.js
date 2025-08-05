// 1.Create an array containing different types of teas 
// const Tea = ["Oolong Tea","Milk tea","Green Tea","Herbal Tea"]
// // 2.Add "Chamomile Tea" to the existing list of teas 
// const arrayLen = Tea.push("Chamomile Tea") // push function returns current length of array
// console.log(arrayLen);//Output : 5
// console.log(Tea);

// // 3. Remove "Oolong Tea" from the list of Teas
// Tea.splice(0,1)// removes a specific number of elements from specified index ,here 0 specifies index,1 specifies number of elements
// console.log(Tea);

// // 4. Filter the list to only include the tea which are caffeinated

// function isCaffeinatedTea(tea) {
//     return tea === "Oolong Tea" || tea === "Milk tea" || tea === "Green Tea";
// }
// const caffTea = Tea.filter(isCaffeinatedTea);//filter() method creates a new array
// console.log(caffTea);