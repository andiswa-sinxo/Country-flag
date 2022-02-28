const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const country = document.querySelector(".country");
const flag = document.querySelector(".flag")
const button = document.querySelector(".btn")
const input = document.querySelector(".inputCountry")
const emoji = document.querySelector(".inputFlag")

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

function displayCountry(){
    var countryInput = input.value
    var flagInput = emoji.value
    console.log(countryInput)
    createList(countryInput + ' ' + flagInput)
}


function showCountry(countries) {
    for (let i = 0; i < countries.length; i++) {
            const element1 = countries[i];
            const element2 = flags[i];
            createList(element1 + ' '+ element2); 
        }    
    }


button.addEventListener('click', displayCountry)
showCountry(countries);

