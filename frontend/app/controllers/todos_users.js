import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    router: service(),
    actions: {
        toggleDone(){
            console.log(this.store.get('user', 1))
        },
        goBackToList: function() {
            this.get('router').transitionTo('todos');
            return true;
        }
    }
});
