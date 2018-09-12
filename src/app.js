const Countries = require ('./models/countries.js')
const SelectView = require ('./views/select_view.js')
const DetailView = require ('./views/detail_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const countries = new Countries ();
  countries.getData();
  countries.bindEvents();
  const selectElement = document.querySelector('select#countries');
  const countriesDropdown = new SelectView(selectElement);
  countriesDropdown.bindEvents();
  const countryData = new DetailView (document.querySelector('div#country'))
  countryData.bindEvents();

});
