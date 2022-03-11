const worldCountry = () => {

    // let getStoredCountry = stored || []

    
    // const storingCountry = () => {
    //     return getStoredCountry
    // }

    const emptyCountry = (country) => {
        if (country === ""){
            return "Please enter a country"
        }
    }
    const emptyFlag = (flag) => {
        if(flag === ""){
            return "Please paste a flag"
        }

    }
    const emptyCountryFlag = (flagCounty) => {
        if(!flagCounty){
            return "Please enter a country and paste a flag"
        }

    }
    const refresh = () => {
        setTimeout(() => {
            localStorage.clear()
        },2000);
    }

    const addCountry = (countryName, flag) => {
        let a = countryName
        let d = flag 
         if(countryName + flag){
             return a + d
         }

        }

    // const sortingCountries = (countryFlag) => {
    //     let order = countryFlag.sort()
    //         return order
    // }
    // const dscendCountries = (countryFlag) => {
    //     let sort = countryFlag.reverse();
    //     return sort 
    // }



    return {
         emptyCountry,
         emptyFlag,
         emptyCountryFlag,
         refresh,
         addCountry
        //  sortingCountries,
        //  dscendCountries
         
    }
    
}
