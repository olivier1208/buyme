import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Component.extend({
    tagName: "li",
    isShowingModal: false,
    session: service(),
    currentUser: service(),
    attachUser(user) {
        console.log("attaching user " + user.id + " with task HOW TO GET THE TASK ?? (Logged in todos_users.js line11)")
        alert('You need to attach user#' + user.id + " ")
    },

    detachUser(user) {
        alert('You need to detach user#' + user.id + " with task HOW TO GET THE TASK ?? (Logged in todos_users.js line11)")
        console.log("detaching user " + user.id)
    },
    actions: {
        toggleDone(e) {
            const user = this.get('user')
            const todo = this.get('todo')
            if (e.target.checked) {
                this.attachUser(user)
            } else {
                this.detachUser(user)
            }
        },
    }
});


