// Array methods

// const num = [1,2,3,4,5,6,7,8,9];
const num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(num.length);
console.log(num[num.length - 1]);

// Push-<at the end
num.push(10);
console.log(num);

// Unshift - >at the begining
num.unshift(0);
console.log(num);

// Pop-> remove at the end
num.pop();
console.log(num);

// shift-> remove at the begining
num.shift();
console.log(num);

//
num[0] = "PK"; // num:{val:10};
console.log(num);

//
const names = ["PK", "SK", "DK", "PS", "NK", "NK"];
console.log(names.indexOf("DK"));
console.log(names.indexOf("NK", names.indexOf("NK")));

console.log(names.lastIndexOf("NK"));
console.log(names.lastIndexOf("PS"));

//
let channels = [
  {
    name: "Channel1",
    subscriber: 10000,
  },
  {
    name: "Channel2",
    subscriber: 20000,
  },
  {
    name: "Channel3",
    subscriber: 50000,
  },
];

console.log(channels.find(function(element){
    return element.subscriber === 50000
}))
console.log(channels.find(element=>element.name === "Channel3"));

// concat

let names1 = ["PK","SK","DK"];
let names2 = ["NK","PS","NK"];
console.log(names1.concat(names2));

// let names3 = names1.concat(names2);

// spread operator -> concat
let names3 = [...names1,...names2];

// slice
console.log(names3.slice(3));
console.log(names3.slice(3,5));

// For loop
// const names = ["PK", "SK", "DK", "PS", "NK", "NK"];
for(let i =0;names.length-1;i++){
    console.log(names[i]);
}

// for of
for(let name of names){
    console.log(name);
} 

//  for each -> array method

names.forEach(function(ele,ind){
    console.log(ele,ind);
})

names.forEach((ele,ind)=>console.log(ele,ind))


// join

let students = ['P','R','A','S','H','A','N','T'];
students = students.join(' ');i
console.log(students.join(' '));

// split
console.log(students.split(" "));


// filter:
let cities = [
    {name:"Mumbai",population:3500000},
    {name:"Delhi",population:57000000},
    {name:"Banglore",population:1500000},
    {name:"Chennai",population:2500000},
    {name:"Lucknow",population:100000},
]
console.log(cities.filter(ele=>ele.population > 3000000));

// map

console.log(cities.map(ele=>ele.population * 2));





