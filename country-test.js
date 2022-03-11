describe("Empty Country & Flag", () => {
    it("Should return an error message please enter a country if there is no country enterted ", () => {
        let test = worldCountry();

        assert.equal("Please enter a country", test.emptyCountry(""))
    });
    it("Should return an error message please enter a flag if there is no flag enterted ", () => {
        let test = worldCountry();

        assert.equal("Please paste a flag", test.emptyFlag(""))
    });
    it("Should return an error message if there is no country entered and a flag pasted ", () => {
        let test = worldCountry();

        assert.equal("Please enter a country and paste a flag", test.emptyCountryFlag(""))
    });
});

describe("Clear localStorage", () => {
    it("Should clear the localStoarage", () => {
        let test = worldCountry();
            let clear = localStorage.clear()
        assert.equal(clear, test.refresh("Storage cleared successfully"))
        
    });
});

describe("Country Flags", () => { 
    it("Should add country flag from USA", () => {

        let test = worldCountry();
        let i = "🇺🇸"
        let p = "Country"
    
        assert.equal("USA", "🇺🇸", test.addCountry("USA🇺🇸"))

    });
})
