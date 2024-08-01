async function hello(){
    console.log("Hello Prashant");
}

// async-await
// async->returns promise and await will wiat till promise returns either resolve or reject


function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000)
    })
}

async function weatherFun(){
    await api();
}
weatherFun()


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

async function getAllData(){
    console.log("fetching Data1");
    await getData(1);
    console.log("fetching Data2");
    await getData(2);
    console.log("fetching Data3");
    await getData(3);
}
getAllData();

