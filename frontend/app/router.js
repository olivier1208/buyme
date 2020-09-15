import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('login');
  this.route('todos', {path: 'todos'}, function () {
    this.route('complete');
    this.route('incomplete');
  });
  this.route('users', {path: 'users'});
});

export default Router;
