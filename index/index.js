// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// let x;
// fetch("https://disease.sh/v3/covid-19/countries/belarus?yesterday=true", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//         console.log("0505");
//         console.log(result);
//         x = result;
//     })
//     .catch(error => console.log('error', error));



class Cards {
    constructor(keyCard) {
        this.keyCard = keyCard;
        this.key = '555';
        this.apiData = [];
        this.dataOfCovid =
        {
            country: "",
            iso3: "",
            flag: "",
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
            per100ThousandRecoveryInLastDay: 0

        }
    }

    getDataFromApi() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch("https://disease.sh/v3/covid-19/countries", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.apiData = result;
                this.apiData.forEach(element => console.log(element.country));
            })
            .catch(error => console.log('error', error));
    }


    showData() {
        console.log(this.dataOfCovid);
    }
}

menuExClass = new Cards('test');
console.log(menuExClass.key, '++++')
menuExClass.showData()
menuExClass.getDataFromApi()