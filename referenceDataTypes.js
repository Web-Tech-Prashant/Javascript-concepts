// 1. Objects
    let heightZebra = "height";
 let animal = {
        name:"Zebra",
        legs:4,
        height:"Big"
 }//object literal-> {}

 console.log(animal.name);
 console.log(animal.legs);
 console.log(animal["legs"]);
 console.log(animal["name"]);
 console.log(animal[heightZebra]);


 // 2. Arrays

 let select_books = ["FirstBook","SecondBook","ThirdBook"];
 console.log(select_books);
 console.log(select_books.length);
 console.log(select_books[0])


 //for--of -> return direct value no index
 for(let value of select_books){
    console.log(value);
 }

//  for..in
 for(let key in Object.keys(select_books)){
    console.log(key,select_books[key]);
 }

//  3. Function

function namasteWorld(name,lastName){
console.log(`Namaste ${name} ${lastName}`)
}
namasteWorld("Prashant","Kumar Singh")


function addition(a,b){
    return a + b;
}
console.log(addition(5,2));