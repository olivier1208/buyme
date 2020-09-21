import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    attached: computed('users.@each.done', function() {
        let users = this.get('users');
        return users.filterBy('done', true).get('length');
    }),
    actions: {
        goBackToList: function() {
            this.get('router').transitionTo('todos');
            return true;
        },
    }
});
