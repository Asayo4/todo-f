<template>
  <div>
    <div class="card2">
      <div v-for="(value, index) in todos" :key="index">
        <div class="todo-list">
          <h3>Your Todo Lists!</h3>
          <div class="flex">
             <p class="id">{{value.id}}.</p>
             <input type="text" :value="todo">
             <button id="update" @click="putTodo(todo.id)">Update</button>
             <button id="del" @click="delTodo(todo.id)">Delete</button>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    id: String,
  },
  data: function() {
    return {
      todo: {}
    }
  },
  methods: {
    getTodo() {
      axios.get("https://radiant-cove-15822.herokuapp.com/api/todo/" + this.todo.id)
        .them((res) => {
          this.todo = res.todo;
        });
    },
    putTodo() {
      axios.put("https://radiant-cove-15822.herokuapp.com/api/to/" + this.todo.id, this.todo)
        .then((res) => {
          console.log(res);
          alert("Update successfully");
          this.$router.push({name: 'Home'})
        });
    },
    delTodo(index) {
      axios
        .delete(
          "https://radiant-cove-15822.herokuapp.com/api/todo" +
            this.todos[index].item.id
        )
        .then((res) => {
          console.log(res);
          alert("Delete successfully");
          this.$router.go({
            path: this.$touter.currentRoute.path,
            force: true,
          });
        });
    }
  }
}
</script>

<style scoped>

.card2 {
  background-color: gray;
  padding: 20px;
}

.flex {
  display: flex;
  margin: 10px;
}

.id {
  padding: 0 10px;
}

.flex input {
  padding: 0 5px;
  width: 45%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  background: whitesmoke;
}

#update {
  margin: 0 5px;
  border-radius: 5px;
  border: 2px solid blue;
  background: whitesmoke;
  color: blue;
}

#del {
  border-radius: 5px;
  border: 2px solid red;
  background: whitesmoke;
  color: red;
}
</style>