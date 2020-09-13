import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:oauth2', email, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
