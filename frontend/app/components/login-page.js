import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  session: service(),
  router: service(),

  actions: {
    authenticate() {
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:oauth2', username, password).then(() => {
        this.get('router').transitionTo('todos.index')
      }, (err) => {
        alert(err.responseJSON.errors.email ||err.responseJSON.errors.username)
      });
    }
  }

});
