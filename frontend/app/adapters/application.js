import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://127.0.0.1:8000'
});
