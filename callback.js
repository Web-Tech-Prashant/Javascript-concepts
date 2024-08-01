console.log("one");
console.log("two");
// aynchronous callback function
setTimeout(() => {
  console.log("hello");
}, 4000);
console.log("three");
console.log("four");

// callback->passing function inside another func as an argumnet.

// synchronous - callback function
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, callback) {
  callback(a, b);
}
// calculator(2,3,(a,b)=>console.log(a+b));
calculator(2, 3, sum);

// callback Hell->calling nested callback

function getData(dataId, getNextData) {
  // after 2s;
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);

  // console.log("data",dataId);
}

getData(1, () => {
  getData(2, () => getData(3, () => getData(4)));
}); //2s hault
// getData(2); //2s hault
// getData(3); //2s hault

// print data1
// print data2
// print data3
