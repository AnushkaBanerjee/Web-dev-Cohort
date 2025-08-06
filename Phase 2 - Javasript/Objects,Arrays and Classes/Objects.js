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


//Playing with memory

let fname = 'Anu'
let fname2 = fname

console.log(fname2);
fname2 = 'Ankit'
console.log(fname2);//Ankit
console.log(fname);//Anu

//therefore, reference is not passed here rather just a copy of the value is passed

//But this is not same for objects

let p2 = person

p2.name = 'Ankit'
console.log(person.name);//Ankit

// here reference is passed 





