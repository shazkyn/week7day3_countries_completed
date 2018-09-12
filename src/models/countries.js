const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function () {
  this.stuff = null;
}

Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.stuff = data;
    PubSub.publish('Countries:all-countries', this.stuff);
  });

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    this.publishDetail(event.detail);
  });
};


};

Countries.prototype.publishDetail = function (index) {
  const chosenCountry = this.stuff[index];
  PubSub.publish('Countries:selected-country', chosenCountry);
};



module.exports = Countries;
