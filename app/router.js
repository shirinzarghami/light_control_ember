import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map( function() {
  this.resource("locations", function() {
    this.route("new");
    this.resource("locations.location", { path: ":location_id" }, function() {
      this.route('lights');
    });
  });
});

export default Router;
