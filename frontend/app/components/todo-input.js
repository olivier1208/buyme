import Component from '@ember/component';
import { inject as service} from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    submitTodo() {
      if (this.get('title')) {
        const record = this.get('store').createRecord("todo", {
          title: this.get('title'),
          done: false
        });
        record.save()
      }
      this.set('title', "");
    }
  }
});
