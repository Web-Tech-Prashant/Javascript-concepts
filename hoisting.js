// Hoisting: code execute hone se pehle hi memory allocate ho jaati hai isi concept ko hoisting kehte hai
        //   memory gets allocated to the variable before its get executed is called hoisting.

        // function sayHello(){
        //     console.log("hello");
        // }

        // var i = 10;

        // sayHello();

        // console.log(i);


        // whenever we allocate memory to variable it always undefined and function will be whole code will sit under memory allocation phase.
        
        // sayHello();
        // console.log(i);
        // function sayHello(){
        //     console.log("hello");
        // }
        // var i = 10;

        // if we will use variable with let then it will be in temporal dead zone: if variable is not initialized then we can not use that variable it will give error i.e reference error.
        // sayHello();
        // console.log(i);
        // function sayHello(){
        //     console.log("hello");
        // }
        // let i = 10;

        // when we create a function using expression like variable it will hold undefine at the time
        // of memory allocation.

    //     sayHello();
    //     console.log(j);
    //    var sayHello= function(){
    //         console.log("hello");
    //     }
    //     var j = 10;



    let foo = 'bar';
    var bar = "foo";
    if(true){
        // console.log(true);
        let foo = "baz";
        var bar = "foobar";
        console.log(foo);
        console.log(bar);
    }
    console.log(foo); //baz, bar
    console.log(bar); //o/p: foobar, foobar bcz var inside block scope also treated as a global and attached to window.


    let foo1 = 'bar';
    var bar1 = "foo";

    function sayHello(){
        let foo1 = "baz";
        var bar1 = "foobar";
        console.log(foo1);
        console.log(bar1);
    }
    sayHello()
    console.log(foo1);
    console.log(bar1);

    // Illegal shadowing

    let foo_1 = "bar";
    var bar_1 ="foobar";

    if(true){
        var foo_1 = "baz";
        var bar_1 = "foobar";
        console.log(foo_1);
    console.log(bar_1);
    }

    let foo;
    var bar;
    const name;