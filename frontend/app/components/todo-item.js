import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Component.extend({
    tagName: "li",
    classNameBindings: ["editing"],
    editing: false,
    isShowingModal: false,
    session: service(),
    currentUser: service(),
    isTaskOwner: computed('params.[]', function () {
        let currentUserId = this.get('currentUser').user.id
        let todoOwnerId = this.get("todo").get("owner_id")

        return parseInt(currentUserId) === todoOwnerId
    }),
    isSharedTodo: computed('params.[]', function () {
        return !!this.get("todo").get("is_shared")
    }),
    actions: {
        editTodo() {
            this.toggleProperty("editing");
        },
        submitTodo() {
            const todo = this.get("todo");
            if (todo.get("title") === "") {
                todo.destroyRecord().then(() => {
                    this.toggleProperty("editing");
                });
            } else {
                this.toggleProperty("editing");
                todo.save();
            }
        },
        toggleDone(e) {
            this.get('todo').set("done", e.target.checked)
            this.get('todo').save()
        },
        deleteTodo() {
            this.get("todo").destroyRecord();
        }
    }
});
