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
    this.route('todos_users', {path: 'todos_users/:todo_id'}, function () {
        this.route('attach');
        this.route('detach');
    });
    this.route("fourOhFour", { path: "*path"});
});

export default Router;
