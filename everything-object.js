// In javascript everything is object.

// object-> collection of key:value pair.
// let obj ={
// "key":"value"
// }

   const course = {
    lecture:10,
    section:3,
    title:"Javascript",
    notes:{
        introduction: 'Welcome to JS Course'
    },
    enroll(){
        console.log("You are successfully enrolled!");
    }
   }

course.enroll();
console.log(course);
course.price = 999;

// Notes : objects are dynamic in nature,so we can add new properties inside obj.
// objects are referenced data type so we can redeclare the same obje variable


//NOTE : we can't redeclare the constant primitive data type varaibles.
    const name ="abv";
    // name="def";
    console.log(name);

    // 1. Factory function > use camelCase(Naming convention)
    
    function createCourse(title){
        return {
            // lecture:10,
            // section:3,
            title:title,
            // notes:{
            //     introduction: 'Welcome to JS Course'
            // },
            enroll(){
                console.log("You are successfully enrolled!");
            }
           }
           
    }
    const course_details = createCourse("Javascript");
    course_details.enroll();
    console.log(course_details.title);

    // 2. Constructor Function -> always in Pascal Case(Naming convention)

    function Course(title){
        this.title = title;
        this.enroll = function(){
            console.log("You are successfully enrolled!");
        }
        // return this; -> ye jo return this hai isko new keyword return karwa leta hai literal obj me {}
        // new = return this -> literal obj{};
    }

    const new_course = new Course("Javascript"); //here new keyword we use jo ki ek literal obj {} create karta hai and this ko catch kara leta hai 
    new_course.enroll();

    // delete 
    delete new_course.title;
    new_course.check_enrolled = function(){
        console.log("30 users are enrolled for this course")
    }
    new_course.check_enrolled()


    ///////////////////     Primite DataType & Non-primite Data type

    // Note everything in js is object
     console.log(new_course.constructor);
     console.log(course_details.constructor)

     const course_string = "courses"; // primitive data types are im-mutable in nature bcz string ke apne in-build methods hote hai but
                                     // like obje we can't change or add any methods inside it bcz string or primitive data types are not dynamic in 
                                     //nature.
     
    

    // NOTE: VIMP -> Kisi bi function ka constructor Function hota hai matlab ki us function ka jo 
                    // constuctor hoga uska naam hi "Function" hai

    // Example1:  use of constructor of the function to create object

        console.log(createCourse.constructor,"createCourse")

        const createCourse_1 = new Function('title',` return {
            title:title,
           
            enroll(){
                console.log("You are successfully enrolled!");
            }
           }`)

           const createCourse_1_obj = createCourse_1("Javascript-constructor-Function");
           createCourse_1_obj.enroll();
           console.log(createCourse_1_obj.title);


//  Difference between Primite and Reference DataType(Non-primite Data types)

// 1. Primitive Data Types
            let number = 10;
            // pass by value
            let number2 = number;
            number = 20;
            console.log("number",number);
            console.log("number2",number2);

// 2. Reference(Non-Primitive) Data Types

            let obj = {number:10};
            // pass by reference
            let obj2 = obj; // isme hota kya hai na ki in js memory is allocated to every variable
                            // so yaha pe instead of value same memory is allocated to obj2 i.e obj wala memory 
                            // allocate ho jata hai usko
                            // iske karan se hota kya hi agar aap obj me kuch change karo to obj2 me reflect hota hai
                            // bcz of same memory it is pointing.

            console.log("Obj",obj);
            console.log("obj2",obj2);
            // obj2.number = 20;
            obj.number = 20;
            console.log("Obj",obj);
            console.log("obj2",obj2);


            // To fix this we use diff ways by which we can pass by value in obje or any reference data types.


            const about_yourself ={
                name:"Prashant Kumar Singh",
                address(){
                    console.log("Vill+PO Morsand, Ward.No.5,Near Panchayat Bhavan,Via Runnisaidpur,Dist-Sitamarhi,Pin-843328,Bihar-India");
                }
            }

            // 1st approach: use spread operator(...)

            const about_yourself_new = {...about_yourself}; //copying the object

           about_yourself.address();
            console.log(about_yourself,about_yourself_new);
            about_yourself_new.address()

            about_yourself.qualification = "B.E - Computer Engineering"
            console.log(about_yourself,about_yourself_new);


            // 2nd approach : use Object.assign

            const country={
                countryCode:"IN",
                fullName:"India"
            }
            
            const country_new = Object.assign({},country);
            console.log(country,country_new);
            country.favSport = "Cricket";
            country_new.fullName = "SG";
            console.log(country,country_new);

            // 3rd approach: using for of loop or for in loop

            const office_details = {
                name:"HCLTech",
                location:"SG"
            }

            const office_details_1 = {};
            for(let key of Object.keys(office_details)){
                office_details_1[key] = office_details[key];
            }
            console.log(office_details,office_details_1)
            office_details.name="Accenture";
            office_details_1.name = "TCS";
            console.log(office_details,office_details_1)


//  Exercises

// exercise1:
            const product = {
                    itemName : "Flower",
                    price:50,
                    discount:20,
                    itemCode:'F40'
            }

            // 1 using Factory function

            function producFactoryFunction(itemName,price,discount,itemCode){
                    return{
                        itemName:itemName,
                        price:price,
                        discount:discount,
                        itemCode:itemCode
                    }
            }

            const product_details = producFactoryFunction("Flower",50,20,'F40');

            console.log(product_details.itemCode)
            product_details.totalDiscount = function(){
                console.log(50*20/100,"discount");
            }
            product_details.totalDiscount()

            // 2. using constructor function - PascalCase

            function Product(itemName,price,discount,itemCode){
                this.itemCode = itemCode;
                this.discount = discount;
                this.price = price;
                this.itemName = itemName;
                
            }
            const product_constructor = new Product("Flower",50,20,'F40')