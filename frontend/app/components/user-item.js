import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Component.extend({
    tagName: "li",
    isShowingModal: false,
    session: service(),
    currentUser: service(),
    attachUser(user) {
        console.log("attaching user " + user.id + " with task ")
    },

    detachUser(user) {
        console.log("dedtaching user " + user.id)
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


