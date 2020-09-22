import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    currentUser: service(),

    model(params) {
        const todo = this.get('store').peekRecord('todo', params.todo_id);
        todo.users = [this.get('currentUser')]

    },
    renderTemplate(controller, model) {
        this.render('users.index', {
            model: model
        });
    }
});
