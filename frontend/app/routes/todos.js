import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import {inject as service} from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
  authenticationRoute: "login",
  currentUser: service(),

  beforeModel() {
    // this.store.unloadAll('todo')
    return this._loadCurrentUser();
  },
  _loadCurrentUser() {
    return this.get('currentUser').load().catch(() => this.get('session').invalidate());
  },
  model() {
    return this.store.findAll('todo', {reload: true});
  }
});
