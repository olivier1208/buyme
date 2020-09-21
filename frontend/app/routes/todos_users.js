import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    authenticationRoute: "login",
    model() {
        const params = this.paramsFor('todos_users')
        const todoId = params.todo_id

        return Promise.all([this.store.findAll('user', {reload: true}), this.store.findRecord('todo', todoId, {include: 'user', reload: true})]).then(([allUsers, todo]) => {
            return allUsers.map(function (user) {
                if (todo.get('users', {reload: true}).find((sharedUser) => {
                    return sharedUser.get('id') === user.get('id')
                })) {
                    user.set('alreadyShared', true)
                } else {
                    user.set('alreadyShared', false)
                }

                return {
                    user: user,
                    todoId: todoId
                }
            })
        })

        // return p2
    },
    actions: {
        goBackToList: function () {
            this.transitionTo('todos');
        }
    }
});
