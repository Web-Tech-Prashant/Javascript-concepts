let students = {
    marks:95,
    printMarks(){
        console.log(`You obtained ${this.marks}`);
    }
}
students.printMarks();


function  calcTax1(){
    console.log("tax rate is 20%");
}

const employee={
     name:"PK",
    calcTax(){
        console.log("tax rate is 10%");
    }
}

const karanArjun={
    salary:5000,
    calcTax(){
        console.log("tax rate is 25%");
    }
}
const karanArjun1={
    salary:35000
}
const karanArjun2={
    salary:15000
}
const karanArjun3={
    salary:25000
}
const karanArjun4={
    salary:35000
}

console.log(employee,"employee");
console.log("karanArjun",karanArjun);
karanArjun.__proto__ = employee;
karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun4.calcTax();
karanArjun.calcTax();