import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  done: DS.attr('boolean', {defaultValue: false}),
  todos: DS.hasMany('todo'),
});
