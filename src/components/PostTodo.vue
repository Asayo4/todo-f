<template>
  <div id="outer">
    <div id="cards">
    <div class="card1">
      <h1 class="title">Todo List</h1>
      <div class="contents">
        <input type="text" placeholder="What should your do?"  v-model="todo"/>
        <button id="add" @click="post()">add</button>
      </div>
    </div>
    <div class="card2">
      <h3>Your Todo Lists!</h3>
      <div class="flex">
        <div>
          <div v-for="(todo, todo_id) in todos" :key="todo_id">
            <p class="id">{{ todo_id }}.</p>
            <input class="todoContents" :value="todo"/>
          </div>
          <button id="update" @click="put(todo_id)">Update</button>
          <button id="del" @click="del(todo_id)">Delete</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    todo_id: String,
  },
  data() {
    return {
      todos: [{todo_id:"", content:""}],
      todo: "",
    };
  },
  methods: {
    getTodo() {
       let content = [];
       const todos = axios.get(
         "https://radiant-cove-15822.herokuapp.com/api/todo/"
       );
       for (let i = 0; i < todos.content.content.todo_id; i++) {
         axios
           .get("https://radiant-cove-15822.herokuapp.com/api/todo/" + todos.content.content[i].id
           )
           .then((res) => {
             content.push(res.content);
           })
       }
    },
    
    post() {
      if (this.content === "") {
        alert("Please enter the contents.");
      } else {
        axios
          .post("https://radiant-cove-15822.herokuapp.com/api/todo/", {
            todo_id: this.$store.state.todo_id,
            content: this.content,
          })
          .then((res) => {
            console.log(res);
            alert("Posted successfully.");
            this.todo = "";
            this.$router.go({
              path: this.$router.currentRoute.path,
              force: true,
            });
          });
      }
    },
    put(todo_id) {
      if (!this.active) {
        axios
          .put("https://radiant-cove-15822.herokuapp.com/api/todo/" + todo_id, {
            todo: this.todo,
          })
          .then((res) => {
            this.$store.dispatch("changeTodo", {
              todo: this.todo,
            });
            console.log(res);
            alert("Updated successfully.");
          });
      }
      this.active = !this.active;
    },
    del(todo_id) {
      const result = this.todos[todo_id].todo.some((value) => {
        return value.todo_id == this.$store.state.todo.todo_id;
      });
      if (result) {
        this.todos[todo_id].todo.forEach((element) => {
          if (element.todo_id == this.$store.state.todo.itodo_d) {
            axios({
              method: "delete",
              url: "https://radiant-cove-15822.herokuapp.com/api/todo/",
              data: {
                todo_id: this.todos[todo_id].item.todo_id,
              },
            }).then((res) => {
              console.log(res);
              this.$router.go({
                path: this.$router.currentRoute.path,
                force: true,
              });
            });
          }
        });
      } else {
        axios
          .post("https://radiant-cove-15822.herokuapp.com/api/todo/", {
            todo_id:this.todos[todo_id].item.todo_id,
          })
          .then((res) => {
            console.log(res);
            this.$router.go({
              path:this.$router.currentRoute.path,
              force: true,
            });
          })
      }
    },
  }
}

</script>
<style scoped>

#outer {
  width: 100%;
  height: 100%;
}

#cards {
  width: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card1 {
  background-color:  #1d3781 ;
  padding: 20px;
}

.title {
  color: aliceblue;
}

.contents {
  display: flex;
  justify-content: flex-start;
}

.card1 input {
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #081535;
  background: whitesmoke;
}

#add {
  width: 50px;
  text-align: center;
  padding: 10px 0;
  color: #081535;
  background-color: whitesmoke;
  border-radius: 5px;
  border: 1px solid #081535;
  margin: 0 60px;
}

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

.todoContents {
  padding: 0 5px;
  height: 40px;
  width: 65%;
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