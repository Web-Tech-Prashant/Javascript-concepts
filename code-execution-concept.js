// stack: linear data storager that follows LIFO(last in first out).
let a = "Namaste World";

function first(){
    console.log("Inside first function");
    second();
    console.log("Again inside first function");
}

function second(){
    console.log("Inside second function");
}
first();
console.log("Inside Global Execution Context");
