// this -> it is a keyword in js


let counter = {
    count:0,
    increment(){
        counter.count++;
    }
}
counter.increment();
counter.increment();
counter.increment();
console.log(counter);

// using factory function
let counter1 =  createCounter();
let counter2 =  createCounter();
// let counter3 =  createCounter();

function createCounter(){
    return{
        count:0,
        increment(){
            counter1.count++;
        }
    }
}
counter1.increment()
counter1.increment()
counter2.increment()
console.log(counter1);
console.log(counter2);
// console.log(counter2);
// console.log(counter3);

// NOTE: 1. As we can see above problem if we create multiple copies of an object and trying to access
         // methods from other copies of an object like counter2.increment(), counter3.increment()    
         // we can't increment the count bcz it refers to the specific object.count and we can not 
         // dynamically change the object copies to access method inside obje.

//         2.  To fix this we use "this keyword" -> which points or refers to the current copy of the object.
            // like we do in constructor function.


//  use of this

let counter_1 = createCounter();
let counter_2 = createCounter();
let counter_3 = createCounter();

function createCounter(){
    return{
        count:0,
        increment(){
            this.count++;
            console.log(this,"inside factory function");
        }
    }
}

counter_1.increment();
counter_1.increment();
counter_2.increment();
counter_2.increment();
counter_3.increment();
counter_3.increment();
console.log(counter_1);
console.log(counter_2);
console.log(counter_3);

// using var --  use of this inside function

var count = 0;
function incrementCounter(){
    debugger;
//   count++;
this.count++; // here this function is not inside any obj. but it is pointing to the global obj. and this will hold the value.
// console.log(this);
}
incrementCounter();
console.log(count);


// console.log(this);

// constructor function

function Car(name){
    this.name = name;
    this.start= function(){
        console.log(this.name + " started")
        // console.log(this);
    }
}
let car_name = new Car("Swift");
console.log(car_name);
console.log(car_name.start());