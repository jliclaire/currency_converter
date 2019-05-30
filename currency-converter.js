const axios = require("axios");

// Use the first API URL inside this function
const getExchangeRate = async (fromCurrency, toCurrency) => {
  const response = await axios.get(
    "http://www.apilayer.net/api/live?access_key=156ecbf19c1888dbe7e55b54b5c88798"
  );
  // console.log(response.data.quotes);
  const results = await response.data.quotes;
  return results;
};

// Use the second API URL inside this function
const getCountries = async currencyCode => {
  const response = await axios.get(
    `https://restcountries.eu/rest/v2/currency/${currencyCode}`
  );
  const results = response.data;
  const countryArray = [];
  for (let { name: country } of results) {
    countryArray.push("\n\t" + country);
  }
  return countryArray;
};

// Complete the function convert given the following arguments:
// Hint: Use the functions you have completed above!
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  let countryArr = await getCountries(fromCurrency);
  let quotesObj = await getExchangeRate(fromCurrency, toCurrency);
  const newCurrencyString = fromCurrency.concat(toCurrency);

  let exRate = quotesObj[newCurrencyString];

  convertedAmount = exRate * amount;

  console.log(
    `${amount} ${fromCurrency} is worth ${convertedAmount.toFixed(
      2
    )} ${toCurrency}. You can spend these in the following countries ${countryArr}`
  );
};

// getExchangeRate("USD", "EUR");
// getCountries("USD");

convertCurrency("USD", "AED", 10);
