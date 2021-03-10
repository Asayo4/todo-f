<template>
  <div id="outer">
    <div id="cards">
    <div class="card1">
      <h1 class="title">Todo List</h1>
      <div class="contents">
        <input type="text" placeholder="What should your do?"  v-model="todo_form"/>
        <button id="add" @click="post()">add</button>
      </div>
    </div>
    <div class="card2">
      <h3>Your Todo Lists!</h3>
      <div class="flex">
        <div>
          <div v-for="(todo, id) in todos" :key="id">
            <p class="id">{{ todo.id }}.</p>
            <input class="todoContents" :value="todo.todo"/>
            <button id="update" @click="put(todo)">Update</button>
            <button id="del" @click="del(todo)">Delete</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      todo_form: "",
    };
  },
  methods: {
    post() {
      if (this.todo_form === "") {
        alert("Please enter the contents.");
      } else {
        axios
          .post("https://radiant-cove-15822.herokuapp.com/api/todo", {
            id: this.$store.state.id,
            todo: this.todo_form,
          })
          .then((res) => {
            console.log(JSON.stringify(res));
            alert("Posted successfully.");
            this.todo = "";
            this.get()
            this.$router.go({
              path: this.$router.currentRoute.path,
              force: true,
            });
          });
      }
    },
    put(todo) {
        axios({
          method:'put',
          url: 'https://radiant-cove-15822.herokuapp.com/api/todo', 
          data: JSON.stringify(todo.id),
          dataType: 'json',
          contentType: "application/json;charset=utf-8",
          
          
        })
    },
    del(todo) {
      axios({
        method: "delete",
        url: 'https://radiant-cove-15822.herokuapp.com/api/todo',
        todo: JSON.stringify(todo.id),
        data: todo,
        headers: {
          "Content-Type": "application/json",
        }
      })
    },

    
    
    get() {
      axios
      .get("https://radiant-cove-15822.herokuapp.com/api/todo", {
        id: this.$store.state.id,
        todo: this.todo,
      })
      .then((result) => {
        this.todos = result.data.data
      })
      
    }    
  },
  mounted: function() {
    this.get()
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