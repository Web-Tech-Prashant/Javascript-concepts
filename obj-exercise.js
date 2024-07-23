//  1. Area of square:

let square = {
    side:5,

    get area(){
       return this.side * this.side;
    }
}

square.side = 10;
console.log(square.area)

// 2. join function:
// use of rest operator that clubs in an array to all the arguments
function stringConcat(separator, ...args){
        let new_val = "";
        let args_length = args.length;
        args.forEach((string,ind)=>{
             new_val+= string + `${args_length-1 === ind  ? "": separator} `;
        })
        console.log(new_val);

}

console.log(stringConcat("+", "this", "is", "invalid"));


// exercise 3: using destructering 

let arr = [1,2,3,4,5,6,7,8];
let first_ = arr[0];
let second_ = arr[1];
let third_ = arr[2];
let newarr = arr.slice(3);
console.log(newarr);

// use destructuring

    let [first,second,third, ...others] = arr;

    console.log(first);
    console.log(second);
    console.log(third);
    console.log(others);

    // exercise : matchstick 

    function matchStick(house){

        if(house === 0){
            return 0;
        }
        else{
          return  house * 6 - house +1
        }
    }
    console.log(matchStick(4))
    console.log(matchStick(1))