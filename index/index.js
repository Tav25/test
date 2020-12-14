// async function getDataFromApi() {
//     const requestOptions = {
//       method: 'GET',
//       redirect: 'follow',
//     };

//     let resp = await fetch('https://disease.sh/v3/covid-19/countries', requestOptions)
//     let content = await resp.json()
//     // console.log(content)
//     return content
//   }

//   getDataFromApi()

class Cards {
  constructor() {
    this.pathToApi = 'https://disease.sh/v3/covid-19/countries';
    this.test = 'this is test!';
    this.apiData = [];
    this.dataOfCovidCountru = {
      country: 'not country',
      iso3: '',
      flag: '',
      totalCases: 0,
      totalDeaths: 0,
      totalRecovery: 0,
      totalCasesInLastDay: 0,
      totalDeathInLastDay: 0,
      totalRecoveryInLastDay: 0,
      per100ThousandCases: 0,
      per100ThousandDeath: 0,
      per100ThousandRecovery: 0,
      per100ThousandCasesInLastDay: 0,
      per100ThousandDeathInLastDay: 0,
      per100ThousandRecoveryInLastDay: 0,

    };
  }

  async getDataFromApi() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const resp = await fetch(this.pathToApi, requestOptions);
    const content = await resp.json();
    // console.log(content)
    return await content;
    // fetch(this.pathToApi, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     this.apiData = result;
    //     console.log(result);
    //     console.log(this.dataOfCovidCountru.country);
    //     // this.apiData.forEach((element) => {
    //     //   console.log(element.country);
    //     // });
    //   })
    //   .catch((error) => console.log('error', error));
  }

  test1() {
    console.log('t1+');
    console.log(this.dataOfCovidCountru.country);
    console.log(this.apiData);
    console.log('t1-');
  }

  showData() {
    console.log(this.dataOfCovidCountru);
  }
}

// menuExClass = new Cards();
// menuExClass.showData();
// menuExClass.getDataFromApi();
// menuExClass.test1();
// console.log(menuExClass.apiData(), '++++');

class Dictionary {
  constructor() {
    this.url = 'https://disease.sh/v3/covid-19/countries';
    this.initialize();
    // this.df();
    this.categoryMethod();
    this.entries = [];
  }

  initialize() {
    fetch(this.url)
      .then((response) => response.json())
      .then((entries) => {
        this.entries = entries;
        // console.log(this.entries, 'e1');
        return entries;
      });
  }

  get dataFromCovodApi() {
    fetch(this.url)
      .then((response) => response.json())
      .then((entries) => entries);
  }

  df() {
    console.log(this.entries, 'e2');
  }

  categoryMethod() {
    document.querySelector('#xbut').addEventListener('mouseup', async (e) => {
      console.log(this.entries, 'e3');
      this.df();
    });
  }
}

testW = new Dictionary();
console.log(testW.dataFromCovodApi, 'e6');

window.addEventListener('load', (event) => {
  console.log('All resources finished loading!');
});
