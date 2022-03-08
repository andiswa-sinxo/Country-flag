const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const country = document.querySelector(".country");
const flag = document.querySelector(".flag")
const button = document.querySelector(".btn")
const input = document.querySelector(".inputCountry")
const emoji = document.querySelector(".inputFlag")
const ascending = document.querySelector(".asceBtn")
const descending = document.querySelector(".descBtn")
const error = document.querySelector(".errorMsg")
const countryFlags = [];

if (localStorage["country"]) {
    countryFlags = JSON.parse(localStorage.getItem("country"));
}

function createList(list) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(list);


    node.appendChild(textnode);
    const country = document.querySelector(".country").appendChild(node);

}
function createFlags(lists) {
    const node2 = document.createElement("li");
    const textnode2 = document.createTextNode(lists);

    node2.appendChild(textnode2);
    const flag = document.querySelector(".flag").appendChild(node2);
}

function displayCountry() {
    var regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

    const countryInput = input.value
    const flagInput = emoji.value
    console.log(countryInput)

    if(!countryInput && !flagInput){
        error.innerHTML = "Please add a country and a flag";
        setTimeout(() => {
            error.innerHTML = '';
        },3000);
        return

    }else if(countryInput === "") {
        error.innerHTML = 'Please add a country';
        setTimeout(() => {
            error.innerHTML = '';
        }, 2000);
        return

    }else if(flagInput === ""){
        error.innerHTML = "Please add a flag";
        setTimeout(() => {
            error.innerHTML = '';
        }, 2000);
        
    }
    if (regex.test(emoji.value)) {
    createList(countryInput + ' ' + flagInput)

    }
    // countries.sort()
    // countries.reverse()
    console.log(countries)
}


function showCountry(countries) {
    var countryLIst = []
    for (let i = 0; i < countries.length; i++) {
        const element1 = countries[i];
        const element2 = flags[i];
        createList(element1 + ' ' + element2);
        countryLIst.push(element1 + ' ' + element2)
       
        
    }
    console.log(countryLIst);
    localStorage.setItem('country', JSON.stringify(countryLIst))
}


button.addEventListener('click', displayCountry)
// ascending.addEventListener("click", displayCountry)
// descending.addEventListener("click", displayCountry)

showCountry(countries);

