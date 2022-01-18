import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency.js';


async function makeApiCall(currency1, currency2, amount) {
  const response = await CurrencyExchange.getCurrency(currency1, currency2, amount);
  getElements(response);
}

function getElements(response){
  if (response.result === "success") {
    $(".converted").html(`The converted amount is = ${response.conversion_result}`);
  } else {
    $('.showError').text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $('#convert').click(function() {
    let currency1 = $('#currency1').val();
    let currency2 = $('#currency2').val();
    let amount = parseInt($('#amount').val());
    makeApiCall(currency1, currency2, amount);
  });
});
