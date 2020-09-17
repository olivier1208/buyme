import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    authenticationRoute: "login",
    model() {
        const params = this.paramsFor('todos_users')
        const todoId = params.todo_id
        let todo = this.store.findRecord('todo', todoId)
        todo.then((todo) => {
            console.log(todo.id + " is the id i need to pass to user-item to send it to the API and attach/detach userTask")
            this.store.query('user', {todo: todoId}).then(function (users) {
                // console.log(users.get('firstObject'))
            })
        })
        return this.store.findAll('user', {reload: true}).then(function (users) {
            return users.map(function (user) {
                if (user.get('todos').includes(todo)) {
                    user.set('done', true)
                }
                return user
            })

        });
    },
    actions: {
        goBackToList: function () {
            this.transitionTo('todos');
        }
    }
});
