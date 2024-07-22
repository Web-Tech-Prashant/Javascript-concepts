//  scope:

// 1. global scope
// 2. local scope
// 3. block scope {}-> for,if,

// Note: the scope is bydefault is global
// 1. global scope: var-> window is a global obj in js.
// global scope gets attached to the window obj. 

 var name = "global scope";
 console.log(window.name);

 var name = "Prashant";
 

//  function myName(){
//     var marks = 10;
//     console.log("name",name);
//  }
//  myName();
//  console.log(marks);


 function first(){
    // 
    var x = 1;
    console.log(x);
    function childOfFirst(){
        console.log(x);
    }
    childOfFirst()
 }
 first();

 function first(){
    // 
    var x = 1;
    console.log(x);
    function childOfFirst(){
        var x = 2;
        console.log(x);
    }
    childOfFirst()
 }
 first();

 var x = 0;
 function second_1(){
    console.log(x);
 }
 second_1()

//  block scope : only used with let and const not with var

var x = 10;

{
var x =1;
console.log(x);
}
console.log(x);
// bcz we are using var that attached to global so latest x will be the o/p.

// if(true){
//     let foo = "bar";
// }
// console.log(foo);


// Lexical scope-> similar like inheritence -> parent func properties or variable can access to child function but not vice versa

function Dada(){
        var name = "Prashant Kumar";
        function Papa(){
            console.log(name);
            function Beta(){

                var likes = "coding";
            }
            Beta();
            console.log(likes);  // likes variable gets destroyed its execution once function Beta gets executed completely.
        }
        Papa();
}
Dada();