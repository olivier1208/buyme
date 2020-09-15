import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  headers: {
    "Accept" : "application/json"
  },
  serverTokenEndpoint: 'http://127.0.0.1:8000/api/login',
});
