//Object structure
const person = {
    name : "Anushka",
    age : 22,
    address : {
        street : "57 B.K street",
        apartment : "Prayag Apartment",
        landmark : "Sanghati Club"
    },
    gender : "F",
    single : false,
    hobbies : ["Painting","Music","Binging"]
}

// real life object example remote
const remote = {
    color : 'black',
    brand : 'xyz',
    dimensions : {height : 1,width:1},
    volumeUp : function (){

    },
    turnOff : function(){

    }
}


// //Playing with memory

// let fname = 'Anu'
// let fname2 = fname

// console.log(fname2);
// fname2 = 'Ankit'
// console.log(fname2);//Ankit
// console.log(fname);//Anu

// //therefore, reference is not passed here rather just a copy of the value is passed

// //But this is not same for objects

// let p2 = person

// p2.name = 'Ankit'
// console.log(person.name);//Ankit

// here reference is passed 



//How do we make an actual copy of the object and not the point to the same memory location?

// let p1 = {
//     fname : 'Anu'
// }
// // let p2 = {
// //     fname : p1.fname
// // }
// // p2.fname = 'Ankit'//this can also be done in the next way which is more efficient

// let p2 ={
//     ...p1//spread operator
// }


// console.log(p1,p2);

//but there is still a problem


let p1 = {
    fname : 'Anu',
    address :{
        street : 'B.K street'
    }
}

let p2 ={
    ...p1//spread operator
}

//Output : { fname: 'Anu', address: { street: 'R.S. Street' } } { fname: 'Anu', address: { street: 'R.S. Street' } }
//Therefore, ...(spread operator) doesnot go to the inner objects,this concept is called Shallow copy
let p3 ={
    ...p1,
    address :{
        ...p1.address
    }
}
p3.address.street = 'R.S. Street'

console.log(p1,p2,p3);

//this can be solved by doing a deep copy
//Output: { fname: 'Anu', address: { street: 'B.K street' } } { fname: 'Anu', address: { street: 'B.K street' } } { fname: 'Anu', address: { street: 'R.S. Street' } }


//But this is impractical 
// use this method instead - Deep copy

let p1ToString = JSON.stringify(p1)
let p4 = JSON.parse(p1ToString)
p4.address.street = 'J.K Street'
console.log(p1,p4);
//Output : { fname: 'Anu', address: { street: 'B.K street' } } { fname: 'Anu', address: { street: 'J.K Street' } }
