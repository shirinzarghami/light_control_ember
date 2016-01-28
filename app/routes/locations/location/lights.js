import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var postModel = this.modelFor('locations.location');
    return postModel.get('lights');
  }
});
