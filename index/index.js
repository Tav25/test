


(async () => {
  let contrCovid;
  let globalCovid;
  // let contrCovidfromDate;

  await fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => response.json())
    .then((entries) => {
      // console.log(entries)
      globalCovid = entries
    });


  await fetch('https://disease.sh/v3/covid-19/countries')
    .then((response) => response.json())
    .then((entries) => {
      // console.log(entries)
      contrCovid = entries
    });


  // await fetch('https://disease.sh/v3/covid-19/all')
  //   .then((response) => response.json())
  //   .then((entries) => {
  //     // console.log(entries)
  //   })

  await (() => {
    console.log('4444')
    contrCovid.forEach((element) => {
      // console.log(element.countryInfo.iso3)
      fetch(`https://disease.sh/v3/covid-19/historical/${element.countryInfo.iso3}?lastdays=all`)
        .then((response) => {
          if (!response.ok) {
            throw Error(`is not ok: ` + resp.status);
          }

          // console.log(response.ok);
          return response.json()
        })
        .then((entries) => {
          console.log(entries)

        })
        .catch((err) => {
          console.warn(err)
        })
    });
  })()


  await main(globalCovid, contrCovid)

})();

class Covid19 {
  constructor(globalCovid, contrCovid) {
    // this.urlCountry = 'https://disease.sh/v3/covid-19/countries';
    // this.urlTotal = 'https://disease.sh/v3/covid-19/all';
    this.dataGlobalCovid = globalCovid;
    this.datacontrCovid = contrCovid;

    this.apiDataCountry = [];
    this.apiDataTotal = [];
    this.per100кРopulation = 100000;
    this.dataForTest = 'testData';
    this.getDataFromCovodApiTotal();
    this.getDataFromCovodApiCountry();
  }

  getDataFromCovodApiCountry() {
    // let entries = this.dataForTest;

    this.datacontrCovid.forEach((element) => {
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

        },
      );
    });
  }

  getDataFromCovodApiTotal() {
    let entries = this.dataGlobalCovid
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

function main(globalCovid, contrCovid) {
  testCovid = new Covid19(globalCovid, contrCovid);
  console.log(testCovid.getTestData)
  console.log(testCovid.getCountriesData)
}