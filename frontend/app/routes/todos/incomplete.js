import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let todos = this.modelFor('todos');
    return todos.filter((todo) => {
      return !todo.get('done')
    })
  },
  renderTemplate(controller, model) {
    this.render('todos.index', {
      model: model
    });
  }
});
