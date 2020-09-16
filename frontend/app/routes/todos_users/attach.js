import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.get('store').findRecord('user', params.todo_id);
    },
    renderTemplate(controller, model) {
        this.render('users.index', {
            model: model
        });
    }
});
