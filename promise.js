// let promise = new Promise((resolve,reject)=>{
//   console.log("I am a promise");  
// //   resolve("I am resolved");
// reject("I am rejecting");
// });

// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//         // reject("error");
//     })
// }
// let promise_result = getPromise();
// console.log(promise_result);
// promise_result.then((res)=>{
//     console.log(res,"promise fullfilled");
// })
// promise_result.catch((err)=>{
//     console.log(err,"promise rejected");
// })


// promise chaining

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000)
    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        },4000)
    })
}

// console.log("fetching data1...");
// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log(res);
// console.log("fetching data2....");

// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })

// });

console.log("fetching data1...");
 asyncFunc()
.then((res)=>{
    console.log(res);
console.log("fetching data2....");

asyncFunc2()
.then((res)=>{
    console.log(res);
})
});


// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });



function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(getNextData){
                getNextData();
            }
            resolve("success");
            // resolve("error");
            console.log("data",dataId);
        },5000)
    })
}
// let p1_1 = new getData(12345);
// p1_1.then((res)=>{
//     console.log(res);
// })

getData(123).then((res)=>{
    console.log(res);
    getData(456).then((res)=>{
        console.log(res);
    });
    getData(456).then((res)=>{
        console.log(res);
    })
    getData(456).then((res)=>{
        console.log(res);
    })
})

getData(4564)
.then((res)=>{
    return getData(res);
})
.then((res)=>{
    console.log(res);
})