class Dictionary {
    constructor() {
      this.url = 'https://disease.sh/v3/covid-19/countries';
      //this.initialize();
      this.dataFromCovodApi();
      this.entries = [];
      //this.df();
    }
  
    dataFromCovodApi() {
      fetch(this.url)
        .then((response) => response.json())
        .then((entries) => {
          this.entries = entries;
          this.df()
        });
    }
  
    df() {
      console.log(this.entries, 'e1');
    }
  
  
  }
  
    testW =  new Dictionary();