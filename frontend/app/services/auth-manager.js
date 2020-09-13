import Service from '@ember/service'
import { bool } from '@ember/object/computed'

export default Service.extend({

  accessToken: null,

  authenticate(email, password) {
    return $.ajax({
      method: "POST",
      url: "/token",
      data: { email: email, password: password }
    }).then((result) => {
      this.set('accessToken', result.token);
    });
  },

  invalidate() {
    this.set('accessToken', null);
  },

  isAuthenticated: bool('accessToken')

});
