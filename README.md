# Light-test

This is a project to control of the lights around a house. This is enabled by using a Raspberry Pi which controls
a 433Mhz transmitter that can send 3-byte codes to several power sockets installed around the house to which the lights are connected.

The Raspberry Pi runs a simple Ruby on Rails application which enables a Restful communication with this EmberJS app.

The EmberJS application retrieves a list of locations from the server (using the standard Ember REST adapter). When a location/room is clicked the lights for this location are retrieved and shown. Per light on and off buttons are shown. When clicked, an ajax call is made to the server which then sends the appropriate signals to power sockets.

The server side can be found [hier](https://github.com/shirinzarghami/light_control_server)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

