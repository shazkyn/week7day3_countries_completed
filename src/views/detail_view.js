const PubSub = require('../helpers/pub_sub.js');

const DetailView = function (container) {
  this.container = container;
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country', (event) => {
    this.render(event.detail);
  });
};

DetailView.prototype.render = function (country) {
  this.container.innerHTML = '';
  //document.body.style.backgroundImage = `url(${country.flag})`



  // Add an h2 with the name of the family
  this.addElement('h2', country.name);

  const imgElement = this.addElement('img');
  imgElement.src = country.flag;
    // Add a p with the description
  this.addElement('p', country.region);
  // Add the h3 with heading
  this.addElement('h3', 'Languages:');
  // Add a list container for the instruments
  const languageList = this.addElement('ul');
  // Loop over each instrument
  country.languages.forEach((language) => {
    // Add the instrument to the list as an LI
    this.addElement('li', language.name, languageList);
  });
};

DetailView.prototype.addElement = function(elementType, textContent, container) {
  // If no container is specified, use the root container
  container = container || this.container;

  // Normal 'create element, set text content, append to container' flow
  const element = document.createElement(elementType);
  element.textContent = textContent;
  container.appendChild(element);

  // Return the element (only used for the list)
  return element;
};

module.exports = DetailView;
