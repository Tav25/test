class Dictionary {
  constructor() {
    this.url = 'https://disease.sh/v3/covid-19/countries';
    // this.initialize();
    this.dataFromCovodApi();
    this.entries = [];
    this.apiData = [0, 0, 0, 5, 6, 7, 8, 9, 5, 9, 6, {
      country: 56,
      iso3: 6,
      flag: 67,
    }];
    this.test = '444';
  }

  dataFromCovodApi() {
    fetch(this.url)
      .then((response) => response.json())
      .then((entries) => {
        this.entries = entries;
        this.df();
        return this.apiData;
      });
  }

  df() {
    console.log('e1');
    this.test1();
    console.log('e2');
  }

  test1() {
    this.entries.forEach((element) => {
      this.apiData.push(
        {
          country: element.country,
          iso3: element.countryInfo.iso3,
          // flag: element.countryInfo.flag,
          // countryСenterСoordinates: `${element.countryInfo.lat},${element.countryInfo.long}`,
          // totalCases: element.cases,
          // totalDeaths: element.deaths,
          // totalRecovery: element.recovered,
          // casesInLastDay: element.todayCases,
          // deathInLastDay: element.todayDeaths,
          // recoveryInLastDay: element.todayRecovered,
          // per100KCases: 0,
          // per100KDeath: 0,
          // per100KRecovery: 0,
          // per100KCasesInLastDay: 0,
          // per100KDeathInLastDay: 0,
          // per100KRecoveryInLastDay: 0,
    
        },
      );
    });
  }



}
const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

( async () =>{

  testW = new Dictionary();
  await sleepNow(100)
  await console.log('s1');
  await  console.log(testW.apiData, '666');
  document.querySelector('body > div.testClass').innerHTML = testW.apiData[15].country;

})()




// console.log('a1');
// console.log(testW.apiData, '666');
// console.log('a2');
// console.log('b1');
// document.querySelector('body > div.testClass').innerHTML = testW.apiData;
// console.log('b2');

