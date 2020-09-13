import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend(AuthenticatedRouteMixin, {
  // actions: {
  //   error: function() {
  //     this.transitionTo('/login');
  //     return false;
  //   }
  // },
  model() {
    return this.store.findAll('todo');
  }
});
