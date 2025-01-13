const basedUrl = 'https://v6.exchangerate-api.com/v6/4c836df0ade685b4604f185a/latest'
const dropDown = document.querySelectorAll(".select-container select")
const btn = document.querySelector('form button')
const fromCur = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")



for(let select of dropDown){
    for(currCode in countryList){
        let newOption = document.createElement('option')
        newOption.innerHTML = currCode
        newOption.value = currCode
        select.append(newOption)
        if (select.name ==='from' && currCode === 'USD') {
            newOption.selected ='selected'
        }else if(select.name === 'to' && currCode === 'NPR'){
             newOption.selected ='selected'
        }
    }
    select.addEventListener("change", (evt) =>{
       updateFlag(evt.target)
        
    })
}

const updateFlag = (element) => {
let currCode = element.value
let countryCode = countryList[currCode]
let newUrl = `https://flagsapi.com/${countryCode}/flat/64.png`
let img = element.parentElement.querySelector("img")
img.src = newUrl


}


btn.addEventListener("click", async(evt) =>{
evt.preventDefault()
let amount = document.querySelector("input")
let amtVal = amount.value

if (amtVal === '' || amtVal < 1) {
    amtVal = 1
    amount.value = '1'
}
console.log(amtVal);
console.log(fromCur.value, toCurr.value);
const urlFr = `${basedUrl}/${fromCur.value.toLowerCase()}`
const urlTo = `${basedUrl}/${toCurr.value.toLowerCase()}`
let response1 = await fetch(urlFr)
let response2 = await fetch(urlTo)
let data = response1.json()
console.log();
console.log(response2);


// console.log(response1);
// console.log(response2);


})



