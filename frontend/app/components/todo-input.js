import Component from '@ember/component';
import { inject as service} from '@ember/service';

export default Component.extend({
  store: service(),
  currentUser: service(),
  actions: {
    submitTodo() {
      if (this.get('title')) {
        let currentUserId = this.get('currentUser').user.id
        const record = this.get('store').createRecord("todo", {
          title: this.get('title'),
          done: false,
          owner_id: currentUserId
        });
        record.save()
      }
      this.set('title', "");
    }
  }
});
