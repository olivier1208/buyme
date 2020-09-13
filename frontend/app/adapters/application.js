import DS from 'ember-data';
import { computed } from '@ember/object'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service'

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  host: 'http://127.0.0.1:8000',
  session: service(),
  authorizer: 'authorizer:oauth2',
  headers: computed('session.data.authenticated.token', function() {
    const headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return headers;
  })
});
