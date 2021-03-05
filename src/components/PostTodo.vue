<template>
  <div id="outer">
    <div id="cards">
      <div class="card1">
        <h1 class="title">Todo List</h1>
        <div class="contents">
         <input type="text" placeholder="What should your do?" />
         <button id="add">add</button>
        </div>
      </div>
      <div class="card2">
        <div v-for="(value, index) in todo" :key="index">
          <div class="todo-list">
            <h3>Your Todo Lists!</h3>
            <div class="flex">
               <p class="id">{{value.id}}.</p>
               <input type="text" :value="todo">
               <button id="update">Update</button>
               <button id="del">Delete</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data: function() {
    return {
      todos: []
      .then((res) => {
        this.todos = res.data;
      })
    }
  },
  methods: {
    getTodos() {
      axios.get("https://radiant-cove-15822.herokuapp.com/api/todo")
      .then((res) => {
        this.todos = res.data;
      });
    }
  },
  mounted() {
    this.getTodos();
  }
};
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