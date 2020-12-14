class Dictionary {
  constructor() {
    this.url = 'https://disease.sh/v3/covid-19/countries';
    // this.initialize();
    this.dataFromCovodApi();
    this.entries = [];
    this.apiData = [];
  }

  dataFromCovodApi() {
    fetch(this.url)
      .then((response) => response.json())
      .then((entries) => {
        this.entries = entries;
        this.df();
      });
  }

  df() {
    console.log(this.entries, 'e1');
    this.test1();
    console.log(this.apiData);
  }

  test1() {
    this.entries.forEach((element) => {
      this.apiData.push(
        {
          country: element.country,
          iso3: element.countryInfo.iso3,
          flag: element.countryInfo.flag,
          countryСenterСoordinates:`${element.countryInfo.lat},${element.countryInfo.long}`,
          totalCases: element.cases,
          totalDeaths: element.deaths,
          totalRecovery: element.recovered,
          casesInLastDay: element.todayCases,
          deathInLastDay: element.todayDeaths,
          recoveryInLastDay: element.todayRecovered,
          per100ThousandCases: 0,
          per100ThousandDeath: 0,
          per100ThousandRecovery: 0,
          per100ThousandCasesInLastDay: 0,
          per100ThousandDeathInLastDay: 0,
          per100ThousandRecoveryInLastDay: 0,
          
        },
      );
    });
  }
}

testW = new Dictionary();
