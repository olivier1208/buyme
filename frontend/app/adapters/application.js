import DS from 'ember-data';
import { computed } from '@ember/object'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service'

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  host: 'http://127.0.0.1:8000',
  session: service(),
  authorizer: 'authorizer:application',
  headers: computed('session.data.authenticated.token', function() {
    const headers = {};
    if (this.get('session.data.authenticated').access_token) {
      headers['Authorization'] = `Bearer ${this.get('session.data.authenticated').access_token}`;
    }

    return headers;
  })
});
