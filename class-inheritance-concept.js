class Parent {
  hello() {
    console.log("hello");
  }
}
class Child extends Parent {}

let childObj = new Child();
console.log(childObj);

class Person{
    constructor(name){
        this.name = name;
        this.species = "homo species";
    }
    eat(){
        console.log("eating...");
    }
    sleep(){
        console.log("sleeeping...");
    }
    work(){
        console.log("Do nothing...");
    }
}

class Engineer extends Person{
    constructor(branch,name){
        super(name);
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("solve problems, build something");
    }
}
class Doctor extends Person{
    constructor(branch,name){
        super(name);
        this.branch = branch;
    }
    work(){
        console.log("Treat Patient");
    }
}
let engineer = new Engineer("CSE","Prashant");
console.log(engineer,"engineer-Obj");

let doctor = new Doctor("Surgon","Prashi");
console.log(doctor,"doctor-obj");



class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    
    viewData(){
        console.log("Data viewed");
    }
 
}


class Admin extends User{
    editData(){
        console.log("Data edited");
    }
}

const user = new User("Prashant","abc@gmail.com")
console.log("user",user)
user.viewData();
const admin = new Admin("Admin","admin@gmail.com");
console.log(admin);