// Declaring a class

class Product{
    constructor(itemName,price,discount,productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}

let pencil = new Product("Pencil",20,2,"P10");
console.log("pencil-info",pencil,pencil.itemName,pencil.discount);

// Expression class

// V1:
let Product1 = class Product{
    constructor(itemName,price,discount,productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
};
let chair = new Product1("Chair",499,15,"C10");
console.log("Chair-Details",Product1);

// V2:
let Product2 = class{
    constructor(itemName,price,discount,productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
    get getDiscount(){
        return this.discount;
    }
    set setDiscount(value){
        return this.discount = value;
    }

    discountValue(){
        return (this.price * this.discount) / 100
    }
};
let table = new Product2("table",500,5,"T10");
console.log("Table-info",table);
console.log("getDiscount",table.getDiscount);
console.log("setDiscount",table.setDiscount = 50);
console.log("getDiscount",table.discountValue());

// Extending a class

class Product_New{
    constructor(itemName){
        this.itemName = itemName;
    }
    getItemName(){
        return this.itemName + " is a Product";
    }
};

class Furniture extends Product_New{
    constructor(itemName){
        super(itemName);   
    }
    getItemName(){
        return this.itemName + " is a Furniture";
    }
};

// let product = new Product_New("Product");
let furniture = new Furniture("chair");
console.log("product--",product.getItemName());
console.log("furniture",furniture.getItemName());

