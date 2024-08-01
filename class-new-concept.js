class ToyatoCar{
    constructor(brand,millage){
        console.log("Creating new object");
        this.brand = brand;
        this.millage = millage
    }
    start(){
        console.log("start function calling");
        }
    stop(){
        console.log("Stop function calling");
    }
    // setBrand(name){
    //     this.brandName = name;
    // }
}
// console.log(ToyatoCar);
let fortuner = new ToyatoCar("fortuner",10);
let lexus = new ToyatoCar("lexus",25);
// lexus.setBrand("LEXUS");
// console.log(fortuner);