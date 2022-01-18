import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './script.js';


async function makeApiCall(currency) {
  const response = await CurrencyExchange.getCurrency(currency);
  getElements(response);
}

function getElements(respone){

}

$(document).ready(function() {
  $('#convert').click(function() {
    let amount = $('#money').val();
    let currency = $('#currency').val();
    makeApiCall(currency);
  });
});


