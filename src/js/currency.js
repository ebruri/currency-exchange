export default class CurrencyExchange {  
  static getCurrency() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    }
  calculateCurrency(amount) {
    const tl = amount * body.conversion_rates.try;
    const eu = amount * body.conversion_rates.eur;
  }
}