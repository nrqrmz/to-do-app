const app = Vue.createApp({
  data() {
    return {
      todos: [
        { title: 'Create a vue app', done: true },
        { title: 'Deploy my app in github pages', done: false }
      ],
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      todo = { title: this.newTodo, done: false }
      if (this.newTodo !== '') {
        this.todos.push(todo)
        this.newTodo = ''
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    }
  }
})
