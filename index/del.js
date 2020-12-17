
          totalCases: element.cases,
          totalDeaths: element.deaths,
          totalRecovery: element.recovered,
          
          per100KCases: Math.round((element.cases / element.population) * this.per100кРopulation),
          per100KDeath: Math.round((element.deaths / element.population) * this.per100кРopulation),
          per100KRecovery: Math.round((element.recovered / element.population) * this.per100кРopulation),



          historical
