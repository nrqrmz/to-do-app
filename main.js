const app = Vue.createApp({
  data() {
    return {
      todos: [
        { title: 'Create a vue app', done: true },
        { title: 'Deploy my app in github pages', done: false }
      ]
    }
  },
  methods: {
    addTodo() {
      alert('hello method')
    }
  }
})
