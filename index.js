
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
const storage = document.querySelector(".storageMsg")
const btn = document.querySelector(".reset")



let countryFlags = [];
if (localStorage["country"]) {
    countryFlags = JSON.parse(localStorage.getItem("country"));
}
let insta = worldCountry(countryFlags);
const countryInput = input.value

const createList = (list) => {
    const node = document.createElement("li");
    const textnode = document.createTextNode(list);


    node.appendChild(textnode);
    country.appendChild(node);

}

const createFlags = (lists) => {
    const node2 = document.createElement("li");
    const textnode2 = document.createTextNode(lists);

    node2.appendChild(textnode2);
    const flag = document.querySelector(".flag").appendChild(node2);
}
 


    const showCountry = (countries) => {
      
        let countryLIst = []
        for (let i = 0; i < countries.length; i++) {
            const element1 = countries[i];
            const element2 = flags[i];
            console.log(element1);

            createList(element1 + ' ' + element2);
            countryLIst.push(element1 + ' ' + element2)

            console.log(element1, element2)
        }

        localStorage.setItem('country', JSON.stringify(countryLIst))
    }


    const resetBtn = () => {
        btn.innerHTML = insta.refresh()
        setTimeout(() => {
            storage.innerHTML = "Storage cleared successfully"
        }, 1000);
    }

    const displayCountry = () => {
        let regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
        const countryInput = input.value
        const flagInput = emoji.value
        console.log(countryInput)
        console.log(flagInput)
    
        if(!countryInput && !flagInput){
            error.innerHTML = insta.emptyCountryFlag(countryInput, flagInput);
            setTimeout(() => {
                error.innerHTML = '';
            },3000);
            return
    
        }else if(countryInput === "") {
            error.innerHTML = insta.emptyCountry(countryInput);
            setTimeout(() => {
                error.innerHTML = '';
            }, 2000);
            return
    
        }else if(flagInput === ""){
            error.innerHTML = insta.emptyFlag(flagInput);
            setTimeout(() => {
                error.innerHTML = '';
            }, 2000);
            
        }
        if (regex.test(emoji.value)) {
        createList(countryInput + ' ' + flagInput)
        flags.push(flagInput);
        countries.push(countryInput);
        console.log(flags, countries);
        country.innerHTML = ''
        showCountry(countries)
        }
    }

button.addEventListener('click', displayCountry)

btn.addEventListener('click', resetBtn)

ascending.addEventListener('click', () => {
    country.innerHTML = '';
console.log(countryFlags);

   let c = countryFlags.sort();
   for (let i = 0; i < c.length; i++) {
       const element = c[i];
       createList(element)
   }
})

 descending.addEventListener('click', () => {
    country.innerHTML = '';
    countryFlags.sort();

      var b =  countryFlags.reverse();
        for (let i = 0; i < b.length; i++) {
            const element = b[i];
            createList(element)
        }
     console.log(countryFlags);
 })

 showCountry(countries);



