const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:all-countries', (event) => {
    this.populate(event.detail);
  });

  this.element.addEventListener('change', (event) => {
    PubSub.publish('SelectView:change', event.target.value);
  });

};

SelectView.prototype.populate = function (countriesArray) {
  countriesArray.forEach((country, index) => {
  const option = document.createElement('option');
  option.textContent = country.name;
  option.value = index;
  this.element.appendChild(option);
});
};

module.exports = SelectView;
