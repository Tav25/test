(async () => {
    let contrCovid;
    let globalCovid;
    let dateCovidData;
    let dateCovidDataNEW = {};
    // let contrCovidfromDate;

    await fetch('https://disease.sh/v3/covid-19/all')
        .then((response) => response.json())
        .then((entries) => {
            // console.log(entries)
            globalCovid = entries;
        });

        //! добавить историю для глобал

    await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((entries) => {
            // console.log(entries)
            contrCovid = entries;
        });

    await console.log('1-hgghghh');
    await fetch('https://disease.sh/v3/covid-19/historical?lastdays=all')
        .then((response) => response.json())
        .then((entries) => {
            // console.log(entries);
            dateCovidData = entries;
        })
        .then(() => {
            dateCovidData.forEach((element) => {
                // console.log(element.timeline);
                if (!element.province) {
                    // console.log(element.country)
                    dateCovidDataNEW[element.country] = element.timeline
                }
            });
        });

    await console.log('2-hgghghh');
    // await console.log('3-hgghghh', dateCovidDataNEW);
    await main(globalCovid, contrCovid, dateCovidDataNEW);
})();

class Covid19 {
    constructor(globalCovid, contrCovid, dateCovidData) {
        // this.urlCountry = 'https://disease.sh/v3/covid-19/countries';
        // this.urlTotal = 'https://disease.sh/v3/covid-19/all';
        this.dataGlobalCovid = globalCovid;
        this.datacontrCovid = contrCovid;
        this.dataDateCovid = dateCovidData;

        this.apiDataCountry = [];
        this.apiDataTotal = [];
        this.per100кРopulation = 100000;
        this.dataForTest = 'testData';
        this.getDataFromCovodApiTotal();
        this.getDataFromCovodApiCountry();
        // console.log(this.dataDateCovid)
    }

    getDataFromCovodApiCountry() {
        // let entries = this.dataForTest;
        this.datacontrCovid.forEach((element) => {
            console.log(element)
            this.apiDataCountry.push(
                {
                    country: element.country,
                    iso3: element.countryInfo.iso3,
                    flag: element.countryInfo.flag,
                    countryСenterСoordinates: [element.countryInfo.lat, element.countryInfo.long],
                    totalCases: element.cases,
                    totalDeaths: element.deaths,
                    totalRecovery: element.recovered,
                    casesInLastDay: element.todayCases,
                    deathInLastDay: element.todayDeaths,
                    recoveryInLastDay: element.todayRecovered,
                    per100KCases: Math.round((element.cases / element.population) * this.per100кРopulation),
                    per100KDeath: Math.round((element.deaths / element.population) * this.per100кРopulation),
                    per100KRecovery: Math.round((element.recovered / element.population) * this.per100кРopulation),
                    per100KCasesInLastDay: Math.round((element.todayCases / element.population) * this.per100кРopulation),
                    per100KDeathInLastDay: Math.round((element.todayDeaths / element.population) * this.per100кРopulation),
                    per100KRecoveryInLastDay: Math.round((element.todayRecovered / element.population) * this.per100кРopulation),
                    history: this.dataDateCovid[element.country],

                },
            );
        });
    }

    getDataFromCovodApiTotal() {
        const entries = this.dataGlobalCovid;
        this.apiDataTotal.push(
            {
                country: 'total',
                totalCases: entries.cases,
                totalDeaths: entries.deaths,
                totalRecovery: entries.recovered,
                casesInLastDay: entries.todayCases,
                deathInLastDay: entries.todayDeaths,
                recoveryInLastDay: entries.todayRecovered,
                per100KCases: Math.round((entries.cases / entries.population) * this.per100кРopulation),
                per100KDeath: Math.round((entries.deaths / entries.population) * this.per100кРopulation),
                per100KRecovery: Math.round((entries.recovered / entries.population) * this.per100кРopulation),
                per100KCasesInLastDay: Math.round((entries.todayCases / entries.population) * this.per100кРopulation),
                per100KDeathInLastDay: Math.round((entries.todayDeaths / entries.population) * this.per100кРopulation),
                per100KRecoveryInLastDay: Math.round((entries.todayRecovered / entries.population) * this.per100кРopulation),

            },
        );
    }

    get getCountriesData() {
        return this.apiDataCountry;
    }

    get getTotalData() {
        return this.apiDataTotal;
    }

    get getTestData() {
        return this.apiDataTotal;
    }
}

function main(globalCovid, contrCovid, dateCovidData) {
    testCovid = new Covid19(globalCovid, contrCovid, dateCovidData);
    // console.log(testCovid.getTestData);
    console.log(testCovid.getCountriesData);
}




