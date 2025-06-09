const app = Vue.createApp({
  data() {
    return {
      todos: [],
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
      this.saveTodos()
    },
    deleteTodo(index) {
      const todo = this.todos[index]
      const confirmed = confirm(`Are you sure you want to delete "${todo.title}"?`)
      if (confirmed) {
        this.todos.splice(index, 1)
        this.saveTodos()
      }
    },
    updateStatus() {
      this.saveTodos()
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    loadTodos() {
      const saved = localStorage.getItem('todos');
      if (saved) {
        this.todos = JSON.parse(saved);
      }
    }
  },
  mounted() {
    this.loadTodos();
  }
})

// const vm = app.mount('#app')
// window.vm = vm
