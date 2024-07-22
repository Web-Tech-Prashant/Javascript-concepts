// Array Exercises:
const characters = [
    {name:"TM",height:'172',mass:"77",eye_color:"brown",gender:"male"},
    {name:"JL",height:'145',mass:"136",eye_color:"black",gender:"male"},
    {name:"BJ",height:'150',mass:"49",eye_color:"grey",gender:"female"},
    {name:"KI",height:'168',mass:"84",eye_color:"black",gender:"male"},

];
//  Exercise 1: Get an array of all names
const names = characters.map(obj=>obj.name);
console.log(names);

//  Exercise 2: Get an array of objects with just name and height properties.

const newObj = characters.map(obj=>{
    return {"name":obj.name,"height":obj.height};
})
console.log(newObj);

//  Exercise 3: Get the total height of all characters.

const total_height = characters.reduce((prev,next)=>prev + Number(next.height),0);
console.log(total_height);

//  Exercise 4: Get Characters with mass greater than 100.

let new_characters = characters.filter(ele=>ele.mass > 100);
console.log(new_characters)


//  Exercise 5: Get all male characters.
let all_males_character = characters.filter(ele=>ele.gender === "male");
console.log(all_males_character);

//  Exercise 6: Sort by gender.
const sort_by_gender = characters.sort((gender1,gender2)=>{
    if(gender1.gender > gender2.gender){
        return -1;
    }
    else if(gender1 < gender2){
        return 1;
    }
    else{
        return 0;
    }
})
console.log(sort_by_gender);

//  Exercise 7: Sort by name.

let sort_by_name = characters.sort((first,second)=>{
    if(first.name > second.name){
        return -1;
    }
    else if(first.name < second.name){
        return 1;
    }
    else{
        return 0;
    }

})
console.log(sort_by_name);

// Exercise 8: Does every characters  have mass more than 40?

let ismass_morethan_40 = characters.every(ele=>ele.mass > 40)
console.log(ismass_morethan_40);

// Exercise 9: Does every characters  have blue eyes?

let is_every_chars_blue_eyes = characters.every(ele=>ele.eye_color === "blue");
console.log(is_every_chars_blue_eyes);

// Exercise 10: is there at lease one male characters?

let is_atleast_one_male = characters.some(ele=>ele.gender === "male");
console.log(is_atleast_one_male)

// Exercise 11: is there at lease one  character taller than 200?
let is_atlease_one_taller = characters.some(ele=>ele.height > 200);
console.log(is_atlease_one_taller);

