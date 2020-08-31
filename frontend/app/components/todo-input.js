import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service(),
  actions: {
    submitTodo() {
      if (this.get('title')) {
        this.get('store').createRecord("todo", {
          title: this.get('title'),
          done: false
        });
      }
      this.set('title', "");
    }
  }
});
