export default class CurrencyExchange {  
  static async getCurrency(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
  calculateCurrency(amount) {
    const tl = amount * body.conversion_rates.try;
    const eu = amount * body.conversion_rates.eur;
  }
}
