let baseurl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"
let dropdownbtn=document.querySelectorAll(".drop-down select");
let convertbt=document.querySelector("#btn")
let amtbtn=document.querySelector("#inp");
let frombt=document.querySelector("#fromid")
let tobt=document.querySelector("#toid")
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
const updateflage = (changed) => {
    let currenctcode = changed.value;
    let countryCode = countryList[currenctcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let imgElement = changed.closest('.selectcont').querySelector('img');
    imgElement.src = newSrc;
};
convertbt.addEventListener("click",(evt)=> {
    evt.preventDefault();
    console.log(amtbtn.value);
})


