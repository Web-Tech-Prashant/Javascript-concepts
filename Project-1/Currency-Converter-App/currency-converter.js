
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#exchange-button");


for(let select of dropdowns){
    for(let codes in countryList){
        let options = document.createElement("option");
        options.innerText = codes;
        options.value=codes;

        if(select.name === "from" && codes==="USA"){
            options.selected="selected";
        }
        if(select.name === "to" && codes==="IND"){
            options.selected="selected";
        }
        select.append(options);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    });

}

const updateFlag = (element)=>{
    const country_code = element.value;
    // const codes = countryList[country_code];
    let imgSrc = `https://flagsapi.com/${country_code}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    img.src = imgSrc;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount =document.querySelector(".amount input");
    console.log(amount.value);
})