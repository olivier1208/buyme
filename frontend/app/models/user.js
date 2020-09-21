import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  alreadyShared: DS.attr('boolean', {defaultValue: false}),
  todos: DS.hasMany('todo', { async: false }),
});
