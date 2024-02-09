let baseurl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdownbtn=document.querySelectorAll(".drop-down select");
let convertbt=document.querySelector("#btn")
let amtbtn=document.querySelector("#inp");
let frombt=document.querySelector(".from select")
let tobt=document.querySelector(".to select")
let messagebtn=document.querySelector(".message");
for (let select of dropdownbtn) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      if(select.name==="from" && currCode==="USD") {
        newOption.selected="selected";
      }
      else if (select.name==="to" && currCode==="INR") {
        newOption.selected="selected";
      }
      newOption.innerText = currCode;
      newOption.value = currCode;
     select.append(newOption)
    }
    select.addEventListener("change",(evt)=> {
        updateflage(evt.target);
    })
}
const updateExchange= async ()=>{
  const URL = `${baseurl}/${frombt.value.toLowerCase()}/${tobt.value.toLowerCase()}.json`;
  let respons=await fetch(URL);
  let data= await respons.json();
  let exrate=data[tobt.value.toLowerCase()];
  let finalamt=amtbtn.value*exrate;
  let finalmessage=`${amtbtn.value} ${frombt.value} is = ${finalamt} ${tobt.value}`
  messagebtn.innerText=finalmessage;
}
const updateflage = (changed) => {
    let currenctcode = changed.value;
    let countryCode = countryList[currenctcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let imgElement = changed.closest('.selectcont').querySelector('img');
    imgElement.src = newSrc;
};
convertbt.addEventListener("click", async (evt)=> {
    evt.preventDefault();
    const URL = `${baseurl}/${frombt.value.toLowerCase()}/${tobt.value.toLowerCase()}.json`;
    let respons=await fetch(URL);
    let data= await respons.json();
    let exrate=data[tobt.value.toLowerCase()];
    let finalamt=amtbtn.value*exrate;
    let finalmessage=`${amtbtn.value} ${frombt.value} is = ${finalamt} ${tobt.value}`
    messagebtn.innerText=finalmessage;
});

window.addEventListener("load", () => {
  updateExchange();
});


