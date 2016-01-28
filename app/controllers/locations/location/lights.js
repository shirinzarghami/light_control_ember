import Ember from 'ember';
export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    turnOn(lights) {
      var uri='lights/'+lights.get('id')+'/turn_on';
      return this.get('ajax').request(uri, {
        method: 'POST',
          data: {name: 'bar'}
      });
    },
    turnOff(lights) {
      var uri='lights/'+lights.get('id')+'/turn_off';
      return this.get('ajax').request(uri, {
        method: 'POST',
          data: { name: 'bar'}
      });
    }
  }
});
