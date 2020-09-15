import Component from '@ember/component';


export default Component.extend({
  tagName: "li",
  classNameBindings: ["editing"],
  editing: false,
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.get('users');
      this.toggleProperty('isShowingModal');
    },
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
