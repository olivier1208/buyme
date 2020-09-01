import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),
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
