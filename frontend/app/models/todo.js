import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  done: DS.attr('boolean', {defaultValue: false}),
  owner_id: DS.attr('number'),
  is_shared: DS.attr('boolean'),
  users: DS.hasMany('user')
});
