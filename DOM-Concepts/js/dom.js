
// document.getElementById("");
// document.getElementsByClassName("");
// document.getElementsByTagName("");

// document.querySelector("p")//by tagName
// document.querySelector("#btnId")//by Id
// document.querySelector(".headingClass")// by class Name

// const heading = document.body.firstElementChild;
// heading.innerText = "Hello Javascript from Apna college Students"
// console.log(heading);
// console.dir(heading);

// const divs = document.querySelectorAll(".box");
// divs[0].textContent = "DIV-1- new text content"
// divs[1].textContent = "DIV-2- new text content"
// divs[2].textContent = "DIV-3- new text content"
// console.log("divs",divs);
// console.dir("divs",divs);


// Attributes
// getAttribute("node")
// setAttribute("node",value)

// const ele = document.querySelectorAll("#boxdiv");
// console.log(ele);
// console.log(ele[0].getAttribute("id"));

// const ele1 = document.querySelector(".para");
// console.log(ele1);
// console.log(ele1.getAttribute("class"));
// ele1.setAttribute("class","para123")

// // style

// // node name->style

// const ele_1 = document.querySelector("#boxdiv");
// ele_1.style.backgroundColor="pink";
// // ele_1.style.visibility = "hidden"
// console.dir(ele_1.style.backgroundColor="pink")

// // Insert Element

// const newEle = document.createElement("button");
// newEle.innerText="Click Me!";
// console.dir(newEle);
// console.log(newEle.innerText);
// // Add this button at particular location like at the end of div having id="#boxdiv"
// const findDiv = document.querySelector("#boxdiv");
// findDiv.append(newEle);// adds at the end of the node

// findDiv.prepend(newEle); //adds at the start of the node.

// findDiv.before(newEle);//adds before the node means outside the selected node

// findDiv.after(newEle);//adds afte the node outside of selected node.


// ele1.append(newEle)
// ele1.remove();

// Exampl1:
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");

btn1.textContent = "Click ME!";
btn1.style.backgroundColor="black";
btn1.style.color="white";
document.body.prepend(btn1);

// if we have to add more than one class using dom object ->classList

// const para = document.querySelector("p");
// para.getAttribute("class");
// para.setAttribute("class","newclass"); //this will override previous class with new one will not add both the class
// console.dir(para.classList);//this will help us to add new classes along with previous class
// para.classList.add("newclass")

const btn = document.querySelector("#btnId");
let curr_mode = "light";
btn.addEventListener("click",()=>{
    if(curr_mode === "light"){
        curr_mode = "dark"
        document.body.style.backgroundColor="#3e4b5c"
    }
    else{
        curr_mode = "light";
        document.body.style.backgroundColor="#E7E8D8"
    }
    console.log(curr_mode);
})