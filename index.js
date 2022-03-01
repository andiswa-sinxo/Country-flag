const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const country = document.querySelector(".country");
const flag = document.querySelector(".flag")
const button = document.querySelector(".btn")
const input = document.querySelector(".inputCountry")
const emoji = document.querySelector(".inputFlag")
const error = document.querySelector(".errorMsg")
var countryFlags = [];

if (localStorage["country"]) {
    countryFlags = JSON.parse(localStorage.getItem("country"));
}

function createList(list) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(list);
    countries.sort()

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
    var countryInput = input.value
    var flagInput = emoji.value

    // f(countryInput === ""){
    //     error.innerHTML = "Please enter a country"
    // }i
    console.log(countryInput)
    createList(countryInput + ' ' + flagInput)
    
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
showCountry(countries);

