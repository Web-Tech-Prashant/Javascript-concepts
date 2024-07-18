// Type Conversion
//  converting one dataType to another datatype called type conversion.

// example1:

// Note: step1: first engine will check the data types if data types differ then it will convert it into string.
//  to convert the value1 means string into number we have to do explicitly i.e. explicit conversion


const value1 = "5";
const value2 = 9;
const sum = value1 + value2;
const explicit_conv_sum = Number(value1) + value2;
console.log(sum); // "59"
console.log(explicit_conv_sum); //

////////////////////////////////////////------------COERSION-------------------//////////////////////////

//  types of coersion : 1. Implicit coersion 2. Explicit coersion

// Explicit -> if we convert the data type with the help of any method like Number or toString()
// Implicit -> w/o any help of method

// NOTE: we can convert the conversion in STRING, BOOLEAN and NUMBER data types only.

// String Conversion:
  let val = String(123); //explicit
 console.log(typeof val)
 let new_str = 123 + "";//implicit
 console.log(typeof new_str);
 console.log(String(-12.3))

//  Boolean Conversion
console.log(Boolean(2));//explicit
if(2){
//   implicit
}

// Number Conversion

console.log(Number('123'));//Explicit
console.log(typeof(+ '123')); //Implicit
console.log(123 != '456');//implicit
console.log(5/null);
console.log(true | 0);

console.log(true + false) // Number conversion bcz of "+" operator expecting o/p in number hence 1 + 0 = 1;
console.log(12/'6'); //Number conversion hoga so that '6' will become Number(6) and perform operation.
                     // o/p will be 2.

console.log("number" + 15 + 3) // JS runs from ltr means left to right and sequential line by line so
                               // It gets the first value as string so it will not check or convert whole value into string
                            // o/p will be 'number153'  


console.log(15 + 3 + "number"); // As per prev stmt it will be "18number"

console.log([1] > null) // comparision operator is being used so it will expect true or false
                        // so we have to do Boolean conversion and then o/p will be 
                        // Boolean(1)->true Boolean(null)->false
                        //Number(true)->1 Number(false)->0
                        // 1>0 -> o/p will be true


console.log('true' == true) 
                            // Bcz of double equal operator try to convert in Number('true')->NaN and Boolean(true)->true
                            //Number(NaN) and Number(true)
                            //o/p-> false

console.log('false' == false);