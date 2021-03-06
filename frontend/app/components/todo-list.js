import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  didInsertElement() {
    let todos = this.get('todos');
    if (todos.get('length') > 0 && todos.isEvery('done', true)) {
      this.set('allAreDone', true);
    } else {
      this.set('allAreDone', false);
    }
  },
  remaining: computed('todos.@each.done', function() {
    let todos = this.get('todos');
    return todos.filterBy('done', false).get('length');
  }),
  inflection: computed('remaining', function() {
    var remaining = this.get('remaining');
    return (remaining === 1) ? 'item' : 'items';
  }),
  completed: computed('todos.@each.done', function() {
    var todos = this.get('todos');
    return todos.filterBy('done', true).get('length');
  }),
  hasCompleted: computed('completed', function() {
    return this.get('completed') > 0;
  }),
  actions: {
    clearCompleted() {
      let completed = this.get('todos').filterBy('done', true);
      completed.forEach((todo) => {
        todo.destroyRecord();
      });
    },
    toggleAll(completeValue) {
      this.set("allAreDone", completeValue);
      let todos = this.get('todos');
      todos.forEach((todo) => {
        todo.set('done', completeValue);
      });
    }
  }
});
